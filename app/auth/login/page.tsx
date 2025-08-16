/**
 * LOGIN PAGE COMPONENT
 *
 * This file renders the login page at the /auth/login route
 *
 * File: app/auth/login/page.tsx
 * Route: /auth/login
 * Purpose: User authentication login form with hero carousel
 */

'use client';

import { useAuth } from '@/lib/auth';
import { motion } from 'framer-motion';
import {
	ArrowRight,
	Code,
	Eye,
	EyeOff,
	Gamepad2,
	Wrench,
	Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

// Wrapper component that uses useSearchParams
function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const router = useRouter();
	const searchParams = useSearchParams();
	const returnTo = searchParams.get('returnTo') || '/';
	const { login } = useAuth();

	const carouselItems = [
		{
			icon: Gamepad2,
			title: 'Gaming & Tech',
			description: 'From ARK server management to Discord bot development',
			color: 'from-tech-blue to-cyber-teal',
		},
		{
			icon: Code,
			title: 'Web Development',
			description: 'Modern React, Next.js, and full-stack applications',
			color: 'from-farm-gold to-sunset-orange',
		},
		{
			icon: Wrench,
			title: 'Hardware & Electronics',
			description: 'Circuit boards, repairs, and technical solutions',
			color: 'from-pasture-green to-cyber-teal',
		},
		{
			icon: Zap,
			title: 'AI & Innovation',
			description: 'Cutting-edge tools and automation solutions',
			color: 'from-glow-orange to-glow-blue',
		},
	];

	const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentCarouselIndex((prev) => (prev + 1) % carouselItems.length);
		}, 4000);
		return () => clearInterval(interval);
	}, [carouselItems.length]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		try {
			await login(email, password);

			// Redirect back to the page they were on
			router.push(returnTo);
		} catch (err: any) {
			setError(err.message || 'Login failed. Please check your credentials.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex">
			{/* Left Panel - Hero Carousel */}
			<div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-neutral-gray via-midnight-blue to-tech-blue relative overflow-hidden">
				<div className="absolute inset-0 circuit-bg opacity-10"></div>
				<div className="relative z-10 flex items-center justify-center w-full">
					<motion.div
						key={currentCarouselIndex}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.5 }}
						className="text-center text-white px-8"
					>
						<div
							className={`w-24 h-24 bg-gradient-to-br ${carouselItems[currentCarouselIndex].color} rounded-2xl flex items-center justify-center mx-auto mb-8`}
						>
							{React.createElement(carouselItems[currentCarouselIndex].icon, {
								className: 'w-12 h-12 text-white',
							})}
						</div>
						<h2 className="text-4xl font-tech mb-4">
							{carouselItems[currentCarouselIndex].title}
						</h2>
						<p className="text-xl text-white/80 max-w-md mx-auto font-farm">
							{carouselItems[currentCarouselIndex].description}
						</p>
					</motion.div>
				</div>

				{/* Carousel Indicators */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
					{carouselItems.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentCarouselIndex(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentCarouselIndex
									? 'bg-white scale-125'
									: 'bg-white/30 hover:bg-white/50'
							}`}
						/>
					))}
				</div>
			</div>

			{/* Right Panel - Login Form */}
			<div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					{/* Header */}
					<div className="text-center">
						<Link
							href="/"
							className="inline-flex items-center space-x-2 text-farm-gold hover:text-sunset-orange transition-colors mb-4"
						>
							<ArrowRight className="w-4 h-4 rotate-180" />
							<span>Back to Home</span>
						</Link>
						<h1 className="text-3xl font-tech text-white mb-2">
							Welcome <span className="text-gradient">Back</span>
						</h1>
						<p className="text-white/70">
							Sign in to your account to continue your journey
						</p>
					</div>

					{/* Login Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						{error && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								className="bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg"
							>
								{error}
							</motion.div>
						)}

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-white/80 mb-2"
							>
								Email Address
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
								placeholder="Enter your email"
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-white/80 mb-2"
							>
								Password
							</label>
							<div className="relative">
								<input
									id="password"
									name="password"
									type={showPassword ? 'text' : 'password'}
									autoComplete="current-password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full px-4 py-3 pr-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
									placeholder="Enter your password"
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/40 hover:text-white/60 transition-colors"
								>
									{showPassword ? (
										<EyeOff className="w-5 h-5" />
									) : (
										<Eye className="w-5 h-5" />
									)}
								</button>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-glow-blue focus:ring-glow-blue border-white/20 rounded bg-white/10"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-white/70"
								>
									Remember me
								</label>
							</div>
							<div className="text-sm">
								<Link
									href="/auth/forgot-password"
									className="text-farm-gold hover:text-sunset-orange transition-colors"
								>
									Forgot password?
								</Link>
							</div>
						</div>

						<button
							type="submit"
							disabled={isLoading}
							className="w-full btn-primary py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isLoading ? 'Signing In...' : 'Sign In'}
						</button>
					</form>

					{/* Divider */}
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-white/20" />
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-black text-white/50">
								Or continue with
							</span>
						</div>
					</div>

					{/* Social Login Buttons */}
					<div className="grid grid-cols-2 gap-3">
						<button className="btn-outline flex items-center justify-center space-x-2 py-3">
							<svg className="w-5 h-5" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								/>
								<path
									fill="currentColor"
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								/>
								<path
									fill="currentColor"
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								/>
								<path
									fill="currentColor"
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								/>
							</svg>
							<span>Google</span>
						</button>
						<button className="btn-outline flex items-center justify-center space-x-2 py-3">
							<svg className="w-5 h-5" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
								/>
							</svg>
							<span>Twitter</span>
						</button>
					</div>

					{/* Sign Up Link */}
					<div className="text-center">
						<p className="text-white/70">
							Don't have an account?{' '}
							<Link
								href="/auth/signup"
								className="text-farm-gold hover:text-sunset-orange transition-colors font-medium"
							>
								Sign up here
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function LoginPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LoginForm />
		</Suspense>
	);
}
