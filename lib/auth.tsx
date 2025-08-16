/**
 * AUTHENTICATION CONTEXT
 *
 * This file provides authentication context and hooks for the application
 *
 * File: lib/auth.tsx
 * Purpose: User authentication state management and Firebase Auth integration
 */

'use client';

import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	User,
	UserCredential,
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getFirebaseAuth } from './firebase';

interface AuthContextType {
	user: User | null;
	loading: boolean;
	login: (email: string, password: string) => Promise<UserCredential>;
	signup: (
		email: string,
		password: string,
		displayName?: string
	) => Promise<UserCredential>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Only run on client side
		if (typeof window === 'undefined') return;

		const auth = getFirebaseAuth();
		if (!auth) return;

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const login = async (email: string, password: string) => {
		const auth = getFirebaseAuth();
		if (!auth) throw new Error('Firebase not initialized');
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signup = async (
		email: string,
		password: string,
		displayName?: string
	) => {
		const auth = getFirebaseAuth();
		if (!auth) throw new Error('Firebase not initialized');

		const result = await createUserWithEmailAndPassword(auth, email, password);

		if (displayName && result.user) {
			await updateProfile(result.user, { displayName });
		}

		return result;
	};

	const logout = async () => {
		const auth = getFirebaseAuth();
		if (!auth) throw new Error('Firebase not initialized');
		await signOut(auth);
	};

	const value = {
		user,
		loading,
		login,
		signup,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
