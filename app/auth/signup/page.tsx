/**
 * SIGNUP PAGE COMPONENT
 *
 * This file renders the signup page at the /auth/signup route
 *
 * File: app/auth/signup/page.tsx
 * Route: /auth/signup
 * Purpose: Multi-step user registration form with carousel
 */

'use client';

import { useAuth } from '@/lib/auth';
import { AnimatePresence, motion } from 'framer-motion';
import {
	ArrowLeft,
	ArrowRight,
	Building,
	Check,
	Code,
	Eye,
	EyeOff,
	Gamepad2,
	Lock,
	Mail,
	Phone,
	User,
	Wrench,
	Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

export default function SignupPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SignupForm />
		</Suspense>
	);
}

function SignupForm() {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '',
		company: '',
		interests: [] as string[],
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const router = useRouter();
	const searchParams = useSearchParams();
	const returnTo = searchParams.get('returnTo') || '/';

	const carouselItems = [
		{
			icon: Gamepad2,
			title: 'Join the Community',
			description:
				'Connect with fellow developers, gamers, and tech enthusiasts',
			color: 'from-tech-blue to-cyber-teal',
		},
		{
			icon: Code,
			title: 'Access Premium Content',
			description:
				'Get early access to Discord bots, tools, and exclusive resources',
			color: 'from-farm-gold to-sunset-orange',
		},
		{
			icon: Wrench,
			title: 'Technical Support',
			description: 'Get help with your projects and technical challenges',
			color: 'from-pasture-green to-cyber-teal',
		},
		{
			icon: Zap,
			title: 'Stay Updated',
			description: 'Be the first to know about new projects and updates',
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

	const interests = [
		'Discord Bot Development',
		'Web Development',
		'Game Development',
		'Hardware & Electronics',
		'AI & Machine Learning',
		'Server Management',
		'Chrome Extensions',
		'API Development',
	];

	const handleInterestToggle = (interest: string) => {
		setFormData((prev) => ({
			...prev,
			interests: prev.interests.includes(interest)
				? prev.interests.filter((i) => i !== interest)
				: [...prev.interests, interest],
		}));
	};

	const nextStep = () => {
		if (currentStep < 3) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		try {
			// TODO: Implement Firebase authentication
			// For now, simulate successful signup
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Redirect back to the page they were on
			router.push(returnTo);
		} catch (err) {
			setError('Signup failed. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const renderStep1 = () => (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			className="space-y-6"
		>
			<h2 className="text-2xl font-tech text-white mb-6">Basic Information</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<label
						htmlFor="firstName"
						className="block text-sm font-medium text-white/80 mb-2"
					>
						First Name
					</label>
					<div className="relative">
						<User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
						<input
							id="firstName"
							type="text"
							value={formData.firstName}
							onChange={(e) =>
								setFormData({ ...formData, firstName: e.target.value })
							}
							required
							className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
							placeholder="Enter your first name"
						/>
					</div>
				</div>

				<div>
					<label
						htmlFor="lastName"
						className="block text-sm font-medium text-white/80 mb-2"
					>
						Last Name
					</label>
					<div className="relative">
						<User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
						<input
							id="lastName"
							type="text"
							value={formData.lastName}
							onChange={(e) =>
								setFormData({ ...formData, lastName: e.target.value })
							}
							required
							className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
							placeholder="Enter your last name"
						/>
					</div>
				</div>
			</div>

			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-white/80 mb-2"
				>
					Email Address
				</label>
				<div className="relative">
					<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
					<input
						id="email"
						type="email"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						required
						className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
						placeholder="Enter your email"
					/>
				</div>
			</div>

			<div className="flex justify-end">
				<button
					type="button"
					onClick={nextStep}
					disabled={
						!formData.firstName || !formData.lastName || !formData.email
					}
					className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Next Step
					<ArrowRight className="w-4 h-4 ml-2" />
				</button>
			</div>
		</motion.div>
	);

	const renderStep2 = () => (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			className="space-y-6"
		>
			<h2 className="text-2xl font-tech text-white mb-6">Security & Contact</h2>

			<div>
				<label
					htmlFor="password"
					className="block text-sm font-medium text-white/80 mb-2"
				>
					Password
				</label>
				<div className="relative">
					<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
					<input
						id="password"
						type={showPassword ? 'text' : 'password'}
						value={formData.password}
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
						required
						className="w-full pl-10 pr-12 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
						placeholder="Create a strong password"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
					>
						{showPassword ? (
							<EyeOff className="w-5 h-5" />
						) : (
							<Eye className="w-5 h-5" />
						)}
					</button>
				</div>
			</div>

			<div>
				<label
					htmlFor="confirmPassword"
					className="block text-sm font-medium text-white/80 mb-2"
				>
					Confirm Password
				</label>
				<div className="relative">
					<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
					<input
						id="confirmPassword"
						type={showConfirmPassword ? 'text' : 'password'}
						value={formData.confirmPassword}
						onChange={(e) =>
							setFormData({ ...formData, confirmPassword: e.target.value })
						}
						required
						className="w-full pl-10 pr-12 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
						placeholder="Confirm your password"
					/>
					<button
						type="button"
						onClick={() => setShowConfirmPassword(!showConfirmPassword)}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
					>
						{showConfirmPassword ? (
							<EyeOff className="w-5 h-5" />
						) : (
							<Eye className="w-5 h-5" />
						)}
					</button>
				</div>
			</div>

			<div>
				<label
					htmlFor="phone"
					className="block text-sm font-medium text-white/80 mb-2"
				>
					Phone Number (Optional)
				</label>
				<div className="relative">
					<Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
					<input
						id="phone"
						type="tel"
						value={formData.phone}
						onChange={(e) =>
							setFormData({ ...formData, phone: e.target.value })
						}
						className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
						placeholder="Enter your phone number"
					/>
				</div>
			</div>

			<div className="flex justify-between">
				<button type="button" onClick={prevStep} className="btn-outline px-8">
					<ArrowLeft className="w-4 h-4 mr-2" />
					Previous
				</button>
				<button
					type="button"
					onClick={nextStep}
					disabled={
						!formData.password ||
						!formData.confirmPassword ||
						formData.password !== formData.confirmPassword
					}
					className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Next Step
					<ArrowRight className="w-4 h-4 ml-2" />
				</button>
			</div>
		</motion.div>
	);

	const renderStep3 = () => (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			className="space-y-6"
		>
			<h2 className="text-2xl font-tech text-white mb-6">
				Preferences & Interests
			</h2>

			<div>
				<label
					htmlFor="company"
					className="block text-sm font-medium text-white/80 mb-2"
				>
					Company/Organization (Optional)
				</label>
				<div className="relative">
					<Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
					<input
						id="company"
						type="text"
						value={formData.company}
						onChange={(e) =>
							setFormData({ ...formData, company: e.target.value })
						}
						className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
						placeholder="Enter your company name"
					/>
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium text-white/80 mb-3">
					What interests you? (Select all that apply)
				</label>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					{interests.map((interest) => (
						<label
							key={interest}
							className="flex items-center space-x-3 cursor-pointer"
						>
							<input
								type="checkbox"
								checked={formData.interests.includes(interest)}
								onChange={() => handleInterestToggle(interest)}
								className="w-4 h-4 text-glow-blue bg-white/10 border-white/20 rounded focus:ring-glow-blue focus:ring-offset-0"
							/>
							<span className="text-sm text-white/70">{interest}</span>
						</label>
					))}
				</div>
			</div>

			<div className="flex justify-between">
				<button type="button" onClick={prevStep} className="btn-outline px-8">
					<ArrowLeft className="w-4 h-4 mr-2" />
					Previous
				</button>
				<button
					type="submit"
					disabled={isLoading}
					className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isLoading ? 'Creating Account...' : 'Create Account'}
					<Check className="w-4 h-4 ml-2" />
				</button>
			</div>
		</motion.div>
	);

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

			{/* Right Panel - Signup Form */}
			<div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
				<div className="w-full max-w-md">
					{/* Header */}
					<div className="text-center mb-8">
						<Link href="/" className="inline-flex items-center space-x-2 mb-6">
							<div className="w-12 h-12 bg-gradient-to-br from-farm-gold to-tech-blue rounded-xl flex items-center justify-center">
								<Gamepad2 className="w-7 h-7 text-white" />
							</div>
							<span className="text-2xl font-tech text-white">
								<span className="text-farm-gold">Sly</span>
								<span className="text-tech-blue">'s</span>
								<span className="text-white"> Chronicles</span>
							</span>
						</Link>

						<h1 className="text-3xl font-tech text-white mb-2">
							Join the Community
						</h1>
						<p className="text-white/70">Create your account to get started</p>
					</div>

					{/* Progress Bar */}
					<div className="mb-8">
						<div className="flex items-center justify-between mb-2">
							<span className="text-sm text-white/60">
								Step {currentStep} of 3
							</span>
							<span className="text-sm text-white/60">
								{Math.round((currentStep / 3) * 100)}%
							</span>
						</div>
						<div className="w-full bg-white/10 rounded-full h-2">
							<div
								className="bg-gradient-to-r from-glow-blue to-cyber-teal h-2 rounded-full transition-all duration-300"
								style={{ width: `${(currentStep / 3) * 100}%` }}
							/>
						</div>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						{error && (
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								className="bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg text-sm"
							>
								{error}
							</motion.div>
						)}

						<AnimatePresence mode="wait">
							{currentStep === 1 && renderStep1()}
							{currentStep === 2 && renderStep2()}
							{currentStep === 3 && renderStep3()}
						</AnimatePresence>
					</form>

					{/* Sign In Link */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="text-center mt-8"
					>
						<p className="text-white/70">
							Already have an account?{' '}
							<Link
								href="/auth/login"
								className="text-glow-blue hover:text-glow-orange font-semibold transition-colors"
							>
								Sign in
							</Link>
						</p>
					</motion.div>

					{/* Back to Home */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="text-center mt-6"
					>
						<Link
							href="/"
							className="inline-flex items-center text-white/60 hover:text-white transition-colors"
						>
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to Home
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
