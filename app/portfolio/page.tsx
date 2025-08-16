/**
 * PORTFOLIO PAGE COMPONENT
 *
 * This file renders the portfolio page at the /portfolio route
 *
 * File: app/portfolio/page.tsx
 * Route: /portfolio
 * Purpose: Showcase of projects, Discord bots, web apps, and technical work
 */

'use client';

import { motion } from 'framer-motion';
import {
	ArrowRight,
	Calendar,
	Code,
	ExternalLink,
	Gamepad2,
	Github,
	Globe,
	Star,
	Users,
	Wrench,
	Zap,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function PortfolioPage() {
	const projects = [
		{
			id: 'payment-tracker-bot',
			title: 'Payment Tracker Bot',
			category: 'Discord Bot',
			description:
				'A comprehensive Discord bot for tracking payments, managing subscriptions, and handling financial transactions within gaming communities.',
			image: '/images/payment-tracker-bot.png',
			technologies: ['Discord.js', 'Node.js', 'MongoDB', 'Prisma'],
			features: [
				'Payment Tracking',
				'Subscription Management',
				'Admin Controls',
				'Analytics',
			],
			githubUrl: 'https://github.com/Slydog9696/Payment-Tracker-2024',
			liveUrl: null,
			status: 'Active',
			rating: 4.8,
			downloads: '1.2k+',
		},
		{
			id: 'slys-chronicles-website',
			title: "Sly's Chronicles Website",
			category: 'Web Application',
			description:
				'A modern, responsive website built with Next.js 15+ and Firebase, featuring authentication, dynamic content, and a beautiful UI.',
			image: '/images/slys-chronicles-website.png',
			technologies: [
				'Next.js 15+',
				'React 19',
				'Firebase',
				'Tailwind CSS',
				'Framer Motion',
			],
			features: [
				'User Authentication',
				'Responsive Design',
				'Dynamic Content',
				'Firebase Integration',
			],
			githubUrl: 'https://github.com/Slydog9696/slys-chronicles-website',
			liveUrl: 'https://slys-chronicles.com',
			status: 'Active',
			rating: 4.9,
			downloads: '500+',
		},
		{
			id: 'ark-server-manager',
			title: 'ARK Server Manager',
			category: 'Game Server Tool',
			description:
				'An automated tool for managing ARK: Survival Evolved servers, including mod management, backup systems, and performance monitoring.',
			image: '/images/ark-server-manager.png',
			technologies: ['Python', 'Docker', 'Linux', 'Shell Scripting'],
			features: [
				'Mod Management',
				'Auto Backups',
				'Performance Monitoring',
				'Web Dashboard',
			],
			githubUrl: 'https://github.com/Slydog9696/ARK-Server-Manager',
			liveUrl: null,
			status: 'Active',
			rating: 4.7,
			downloads: '800+',
		},
		{
			id: 'chrome-extension-hub',
			title: 'Chrome Extension Hub',
			category: 'Browser Extension',
			description:
				'A collection of useful Chrome extensions for developers, including code formatters, productivity tools, and web development utilities.',
			image: '/images/chrome-extension-hub.png',
			technologies: ['JavaScript', 'Chrome APIs', 'HTML/CSS', 'Manifest V3'],
			features: [
				'Code Formatting',
				'Productivity Tools',
				'Developer Utilities',
				'Customizable',
			],
			githubUrl: 'https://github.com/Slydog9696/Chrome-Extension-Hub',
			liveUrl: 'https://chrome.google.com/webstore/detail/slys-extension-hub',
			status: 'Active',
			rating: 4.6,
			downloads: '2.1k+',
		},
		{
			id: 'discord-community-bot',
			title: 'Community Management Bot',
			category: 'Discord Bot',
			description:
				'A feature-rich Discord bot designed for community management, including moderation tools, welcome systems, and engagement features.',
			image: '/images/community-bot.png',
			technologies: ['Discord.js v14', 'Node.js', 'SQLite', 'Redis'],
			features: [
				'Moderation Tools',
				'Welcome System',
				'Auto-Roles',
				'Analytics',
			],
			githubUrl: 'https://github.com/Slydog9696/Community-Management-Bot',
			liveUrl: null,
			status: 'Active',
			rating: 4.8,
			downloads: '950+',
		},
		{
			id: 'budget-tracker-app',
			title: 'Daily Budget Tracker',
			category: 'Web Application',
			description:
				'A personal finance application for tracking daily expenses, setting budgets, and visualizing spending patterns with interactive charts.',
			image: '/images/budget-tracker.png',
			technologies: ['React', 'Node.js', 'Express', 'Chart.js', 'MongoDB'],
			features: [
				'Expense Tracking',
				'Budget Management',
				'Data Visualization',
				'Export Options',
			],
			githubUrl: 'https://github.com/Slydog9696/ChatGPT-Daily-Budget',
			liveUrl: 'https://daily-budget-tracker.com',
			status: 'Active',
			rating: 4.5,
			downloads: '300+',
		},
	];

	const categories = [
		{ id: 'all', name: 'All Projects', icon: Code, count: projects.length },
		{
			id: 'discord-bot',
			name: 'Discord Bots',
			icon: Gamepad2,
			count: projects.filter((p) => p.category === 'Discord Bot').length,
		},
		{
			id: 'web-application',
			name: 'Web Apps',
			icon: Globe,
			count: projects.filter((p) => p.category === 'Web Application').length,
		},
		{
			id: 'game-server-tool',
			name: 'Game Tools',
			icon: Wrench,
			count: projects.filter((p) => p.category === 'Game Server Tool').length,
		},
		{
			id: 'browser-extension',
			name: 'Extensions',
			icon: Zap,
			count: projects.filter((p) => p.category === 'Browser Extension').length,
		},
	];

	const [selectedCategory, setSelectedCategory] = useState('all');

	const filteredProjects =
		selectedCategory === 'all'
			? projects
			: projects.filter(
					(project) =>
						project.category.toLowerCase().replace(/\s+/g, '-') ===
						selectedCategory
				);

	return (
		<div className="min-h-screen pt-16">
			{/* Hero Section */}
			<section className="relative overflow-hidden py-20">
				<div className="absolute inset-0 circuit-bg opacity-20"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h1 className="text-5xl lg:text-6xl font-tech text-white mb-6">
							My <span className="text-gradient">Portfolio</span>
						</h1>
						<p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto font-farm">
							A collection of projects that showcase my passion for technology
							and problem-solving across different domains
						</p>
					</motion.div>
				</div>
			</section>

			{/* Category Filter */}
			<section className="py-12 bg-black/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-wrap justify-center gap-4">
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setSelectedCategory(category.id)}
								className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
									selectedCategory === category.id
										? 'bg-gradient-to-r from-glow-blue to-cyber-teal text-white shadow-lg'
										: 'bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 hover:text-white'
								}`}
							>
								{/* Icon temporarily removed for debugging */}
								<span className="font-medium">{category.name}</span>
								<span className="bg-white/20 px-2 py-1 rounded-full text-xs">
									{category.count}
								</span>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Featured <span className="text-gradient">Projects</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							Each project represents a unique challenge and solution, built
							with care and attention to detail
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="card group hover:scale-105 transition-transform duration-300"
							>
								{/* Project Image Placeholder */}
								<div className="w-full h-48 bg-gradient-to-br from-neutral-gray to-midnight-blue rounded-lg mb-6 flex items-center justify-center">
									<Code className="w-16 h-16 text-white/40" />
								</div>

								{/* Project Info */}
								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<span className="px-3 py-1 bg-glow-blue/20 text-glow-blue text-xs rounded-full font-medium">
											{project.category}
										</span>
										<div className="flex items-center space-x-1">
											<Star className="w-4 h-4 text-yellow-400 fill-current" />
											<span className="text-white/80 text-sm">
												{project.rating}
											</span>
										</div>
									</div>

									<h3 className="text-xl font-tech text-white group-hover:text-glow-blue transition-colors">
										{project.title}
									</h3>

									<p className="text-white/70 text-sm leading-relaxed">
										{project.description}
									</p>

									{/* Technologies */}
									<div className="flex flex-wrap gap-2">
										{project.technologies.slice(0, 3).map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white/60"
											>
												{tech}
											</span>
										))}
										{project.technologies.length > 3 && (
											<span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white/60">
												+{project.technologies.length - 3} more
											</span>
										)}
									</div>

									{/* Features */}
									<div className="space-y-2">
										<h4 className="text-sm font-medium text-white/80">
											Key Features:
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.features.slice(0, 3).map((feature) => (
												<span
													key={feature}
													className="px-2 py-1 bg-pasture-green/20 text-pasture-green text-xs rounded"
												>
													{feature}
												</span>
											))}
										</div>
									</div>

									{/* Stats & Actions */}
									<div className="flex items-center justify-between pt-4 border-t border-white/20">
										<div className="flex items-center space-x-4 text-sm text-white/60">
											<div className="flex items-center space-x-1">
												<Users className="w-4 h-4" />
												<span>{project.downloads}</span>
											</div>
											<div className="flex items-center space-x-1">
												<Calendar className="w-4 h-4" />
												<span>{project.status}</span>
											</div>
										</div>

										<div className="flex items-center space-x-2">
											{project.githubUrl && (
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
													title="View on GitHub"
												>
													<Github className="w-4 h-4 text-white" />
												</a>
											)}
											{project.liveUrl && (
												<a
													href={project.liveUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
													title="View Live"
												>
													<ExternalLink className="w-4 h-4 text-white" />
												</a>
											)}
										</div>
									</div>

									{/* View Details Button */}
									<button className="w-full btn-outline text-sm py-2 group-hover:bg-glow-blue group-hover:text-white transition-all duration-200">
										View Details
										<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
									</button>
								</div>
							</motion.div>
						))}
					</div>

					{/* No Projects Message */}
					{filteredProjects.length === 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="text-center py-12"
						>
							<Code className="w-16 h-16 text-white/40 mx-auto mb-4" />
							<h3 className="text-xl font-tech text-white/60 mb-2">
								No projects found
							</h3>
							<p className="text-white/40">
								Try selecting a different category or check back later for new
								projects.
							</p>
						</motion.div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-farm-gold/20 to-sunset-orange/20">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Interested in <span className="text-gradient">Collaborating</span>
							?
						</h2>
						<p className="text-xl text-white/70 mb-8">
							Have a project in mind? Let's discuss how we can work together to
							bring your ideas to life
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact" className="btn-primary text-lg px-8 py-4">
								Start a Project
								<ArrowRight className="w-5 h-5 ml-2" />
							</Link>
							<Link href="/downloads" className="btn-outline text-lg px-8 py-4">
								Download Projects
								<Code className="w-5 h-5 ml-2" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
