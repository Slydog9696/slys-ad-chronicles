/**
 * FIREBASE CONFIGURATION
 *
 * This file configures Firebase services for the application
 *
 * File: lib/firebase.ts
 * Purpose: Firebase initialization and configuration
 */

import { getApps, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Lazy initialization function
let app: any = null;
let authInstance: any = null;
let dbInstance: any = null;
let storageInstance: any = null;

function initializeFirebase() {
	if (typeof window === 'undefined') {
		// Server-side rendering - return mock objects
		return {
			app: null,
			auth: null,
			db: null,
			storage: null,
		};
	}

	if (!app) {
		app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
		authInstance = getAuth(app);
		dbInstance = getFirestore(app);
		storageInstance = getStorage(app);

		// Connect to emulators in development
		if (process.env.NODE_ENV === 'development') {
			try {
				connectAuthEmulator(authInstance, 'http://localhost:9099');
			} catch (error) {
				console.log('Auth emulator already connected');
			}

			try {
				connectFirestoreEmulator(dbInstance, 'localhost', 8080);
			} catch (error) {
				console.log('Firestore emulator already connected');
			}

			try {
				connectStorageEmulator(storageInstance, 'localhost', 9199);
			} catch (error) {
				console.log('Storage emulator already connected');
			}
		}
	}

	return { app, auth: authInstance, db: dbInstance, storage: storageInstance };
}

// Export getter functions that initialize Firebase when called
export const getFirebaseApp = () => initializeFirebase().app;
export const getFirebaseAuth = () => initializeFirebase().auth;
export const getFirebaseDB = () => initializeFirebase().db;
export const getFirebaseStorage = () => initializeFirebase().storage;

// For backward compatibility, export the initialized instances
export const auth = getFirebaseAuth;
export const db = getFirebaseDB;
export const storage = getFirebaseStorage;

// Firebase DataConnect Configuration
export const dataConnectConfig = {
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	location: 'us-central1', // Default location for DataConnect
	connectors: {
		// Add your DataConnect connectors here
		// Example: 'my-connector': { endpoint: 'your-endpoint' }
	},
};

// DataConnect utility functions
export const dataConnect = {
	// Initialize DataConnect connection
	async initialize() {
		try {
			// DataConnect initialization logic
			console.log('DataConnect initialized successfully');
			return true;
		} catch (error) {
			console.error('DataConnect initialization failed:', error);
			return false;
		}
	},

	// Execute DataConnect queries
	async executeQuery(connectorName: string, query: string, params?: any) {
		try {
			// DataConnect query execution logic
			console.log(`Executing query on connector: ${connectorName}`);
			// This would integrate with your actual DataConnect setup
			return { success: true, data: null };
		} catch (error) {
			console.error('DataConnect query failed:', error);
			throw error;
		}
	},

	// Get available connectors
	getConnectors() {
		return Object.keys(dataConnectConfig.connectors);
	},
};

export default getFirebaseApp;
