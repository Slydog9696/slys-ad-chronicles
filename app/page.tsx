/**
 * HOME PAGE COMPONENT
 *
 * This file renders the main landing page at the root route (/)
 *
 * File: app/page.tsx
 * Route: /
 * Purpose: Home page with hero section, features, stats, and CTA
 */

'use client';

import { motion } from 'framer-motion';
import {
	ArrowRight,
	Code,
	Download,
	Gamepad2,
	Play,
	Star,
	Users,
	Wrench,
	Zap,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Home() {
	const features = [
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

	const stats = [
		{ number: '80+', label: 'Projects Built', icon: Code },
		{ number: '15+', label: 'Discord Bots', icon: Gamepad2 },
		{ number: '5+', label: 'Years Experience', icon: Star },
		{ number: '1000+', label: 'Community Members', icon: Users },
	];

	return (
		<div className="min-h-screen pt-16">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 circuit-bg opacity-20"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
					<div className="text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="mb-8"
						>
							<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
								<Gamepad2 className="w-5 h-5 text-glow-blue" />
								<span className="text-white/80 text-sm">
									Powered by Mtn Dew, Caffeine, Code, Cattle, and Curiosity
								</span>
							</div>

							<h1 className="text-5xl lg:text-7xl font-tech text-white mb-6">
								<span className="text-farm-gold">Sly</span>
								<span className="text-tech-blue">'s</span>
								<br />
								<span className="text-white">Analog & Digital</span>
								<br />
								<span className="text-gradient">Chronicles</span>
							</h1>

							<p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 font-farm">
								A Digital Tinkerer with an Analog Soul - Bridging Silicon &
								Soil, One Bit at a Time
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									href="/portfolio"
									className="btn-primary text-lg px-8 py-4"
								>
									View My Work
									<ArrowRight className="w-5 h-5 ml-2" />
								</Link>
								<Link
									href="/auth/signup"
									className="btn-outline text-lg px-8 py-4"
								>
									Join the Community
									<Users className="w-5 h-5 ml-2" />
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-black/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl lg:text-5xl font-tech text-white mb-6">
							<span className="text-gradient">What I Do</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							From cattle pastures to cloud networking, I bring practical
							problem-solving to cutting-edge technology
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="card group"
							>
								<div
									className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									{/* Icon temporarily removed for debugging */}
								</div>
								<h3 className="text-xl font-tech text-white mb-3">
									{feature.title}
								</h3>
								<p className="text-white/70 text-sm">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="text-center"
							>
								<div className="w-20 h-20 bg-gradient-to-br from-glow-blue to-cyber-teal rounded-full flex items-center justify-center mx-auto mb-4">
									{/* Icon temporarily removed for debugging */}
								</div>
								<div className="text-4xl lg:text-5xl font-tech text-white mb-2">
									{stat.number}
								</div>
								<div className="text-white/70 text-sm">{stat.label}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-tech-blue/20 to-cyber-teal/20">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-4xl lg:text-5xl font-tech text-white mb-6">
							Ready to <span className="text-gradient">Connect</span>?
						</h2>
						<p className="text-xl text-white/70 mb-8">
							Join my Discord community, check out my latest projects, or let's
							build something amazing together
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="https://discord.gg/5YQkJF6Znf"
								target="_blank"
								className="btn-primary text-lg px-8 py-4"
							>
								Join Discord Community
								<Users className="w-5 h-5 ml-2" />
							</Link>
							<Link
								href="/downloads"
								className="btn-secondary text-lg px-8 py-4"
							>
								Download Projects
								<Download className="w-5 h-5 ml-2" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
