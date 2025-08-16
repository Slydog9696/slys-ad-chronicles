/**
 * DOWNLOADS PAGE COMPONENT
 *
 * This file renders the downloads page at the /downloads route
 *
 * File: app/downloads/page.tsx
 * Route: /downloads
 * Purpose: Showcase downloadable projects, bots, extensions, and tools
 */

'use client';

import { motion } from 'framer-motion';
import {
	ArrowRight,
	Calendar,
	Chrome,
	Code,
	Download,
	ExternalLink,
	FileText,
	Gamepad2,
	Globe,
	Star,
	Users,
	Wrench,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function DownloadsPage() {
	const downloadCategories = [
		{
			id: 'discord-bots',
			title: 'Discord Bots',
			icon: Gamepad2,
			description:
				'Powerful Discord bots for community management, gaming, and utilities',
			color: 'from-tech-blue to-cyber-teal',
			items: [
				{
					name: 'SlyBot - Community Manager',
					description:
						'Comprehensive Discord bot with moderation, music, and utility features',
					version: 'v2.1.0',
					downloads: '1.2k+',
					rating: 4.8,
					tags: ['Moderation', 'Music', 'Utility'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/SlyBot',
				},
				{
					name: 'Payment Tracker Bot',
					description:
						'Discord bot for tracking payments and managing subscriptions',
					version: 'v1.5.2',
					downloads: '856+',
					rating: 4.6,
					tags: ['Payments', 'Subscriptions', 'Finance'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/Payment-Tracker',
				},
				{
					name: 'ARK Server Manager',
					description:
						'Bot for managing ARK: Survival Evolved servers via Discord',
					version: 'v1.3.1',
					downloads: '623+',
					rating: 4.7,
					tags: ['Gaming', 'Server Management', 'ARK'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/ARK-Server-Manager',
				},
			],
		},
		{
			id: 'chrome-extensions',
			title: 'Chrome Extensions',
			icon: Chrome,
			description: 'Useful browser extensions for developers and productivity',
			color: 'from-farm-gold to-sunset-orange',
			items: [
				{
					name: 'PokéDex Extension',
					description: 'Chrome extension for quick Pokémon information lookup',
					version: 'v1.2.0',
					downloads: '342+',
					rating: 4.5,
					tags: ['Gaming', 'Pokémon', 'Information'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/PokeDex-Extension',
				},
				{
					name: 'Code Snippet Saver',
					description: 'Save and organize code snippets while browsing',
					version: 'v1.0.3',
					downloads: '189+',
					rating: 4.3,
					tags: ['Development', 'Productivity', 'Code'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/Code-Snippet-Saver',
				},
			],
		},
		{
			id: 'web-apps',
			title: 'Web Applications',
			icon: Globe,
			description: 'Full-stack web applications and tools',
			color: 'from-pasture-green to-cyber-teal',
			items: [
				{
					name: 'Budget Tracker',
					description: 'Personal finance management web application',
					version: 'v2.0.1',
					downloads: '567+',
					rating: 4.7,
					tags: ['Finance', 'Productivity', 'Web App'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/Budget-Tracker',
				},
				{
					name: 'Digital Life Balance',
					description:
						'App for tracking and balancing digital vs. analog activities',
					version: 'v1.4.2',
					downloads: '234+',
					rating: 4.4,
					tags: ['Wellness', 'Productivity', 'Balance'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/Digital-Life-Balance',
				},
			],
		},
		{
			id: 'game-mods',
			title: 'Game Mods',
			icon: Gamepad2,
			description: 'Custom modifications for various games',
			color: 'from-glow-orange to-glow-blue',
			items: [
				{
					name: 'ARK Stack Mods',
					description:
						'Collection of ARK: Survival Evolved stack modification mods',
					version: 'v1.8.5',
					downloads: '2.1k+',
					rating: 4.9,
					tags: ['ARK', 'Gaming', 'Mods'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/ARK-Stack-Mods',
				},
				{
					name: 'Minecraft Resource Packs',
					description: 'Custom resource packs for Minecraft',
					version: 'v1.2.1',
					downloads: '456+',
					rating: 4.6,
					tags: ['Minecraft', 'Gaming', 'Resources'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/Minecraft-Resources',
				},
			],
		},
		{
			id: 'dev-tools',
			title: 'Development Tools',
			icon: Wrench,
			description: 'Tools and utilities for developers',
			color: 'from-electric-blue to-midnight-blue',
			items: [
				{
					name: 'Project Template Generator',
					description: 'CLI tool for generating project templates',
					version: 'v1.1.0',
					downloads: '123+',
					rating: 4.2,
					tags: ['CLI', 'Development', 'Templates'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/Project-Template-Generator',
				},
				{
					name: 'Code Quality Checker',
					description:
						'Tool for analyzing code quality and suggesting improvements',
					version: 'v1.0.5',
					downloads: '89+',
					rating: 4.1,
					tags: ['Code Quality', 'Analysis', 'Development'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/Code-Quality-Checker',
				},
			],
		},
		{
			id: 'templates',
			title: 'Templates',
			icon: FileText,
			description: 'Reusable templates and boilerplates',
			color: 'from-barn-red to-soil-brown',
			items: [
				{
					name: 'Next.js Starter Template',
					description:
						'Full-stack Next.js template with authentication and database',
					version: 'v1.3.0',
					downloads: '789+',
					rating: 4.8,
					tags: ['Next.js', 'React', 'Full-stack'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/NextJS-Starter-Template',
				},
				{
					name: 'Discord Bot Template',
					description: 'Discord.js bot template with slash commands and events',
					version: 'v1.1.2',
					downloads: '456+',
					rating: 4.6,
					tags: ['Discord.js', 'Bot', 'Template'],
					downloadUrl: '#',
					githubUrl: 'https://github.com/Slydog9696/Discord-Bot-Template',
				},
			],
		},
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
								<Download className="w-5 h-5 text-glow-blue" />
								<span className="text-white/80 text-sm">
									Free Downloads - Open Source Projects
								</span>
							</div>

							<h1 className="text-5xl lg:text-7xl font-tech text-white mb-6">
								<span className="text-gradient">Downloads</span>
							</h1>

							<p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8 font-farm">
								Access my latest Discord bots, Chrome extensions, web
								applications, and development tools
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="#discord-bots"
									className="btn-primary text-lg px-8 py-4"
								>
									Browse Discord Bots
									<Gamepad2 className="w-5 h-5 ml-2" />
								</a>
								<a href="#web-apps" className="btn-secondary text-lg px-8 py-4">
									View Web Apps
									<Globe className="w-5 h-5 ml-2" />
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Downloads Categories */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{downloadCategories.map((category, categoryIndex) => (
						<div key={category.id} id={category.id} className="mb-20">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
								className="text-center mb-12"
							>
								<div
									className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl mb-6`}
								>
									{/* Icon temporarily removed for debugging */}
								</div>
								<h2 className="text-4xl lg:text-5xl font-tech text-white mb-4">
									{category.title}
								</h2>
								<p className="text-xl text-white/70 max-w-3xl mx-auto">
									{category.description}
								</p>
							</motion.div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{category.items.map((item, itemIndex) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.8,
											delay: categoryIndex * 0.1 + itemIndex * 0.1,
										}}
										className="card group hover:scale-105 transition-transform duration-300"
									>
										<div className="flex justify-between items-start mb-4">
											<div>
												<h3 className="text-xl font-tech text-white mb-2">
													{item.name}
												</h3>
												<p className="text-white/70 text-sm mb-3">
													{item.description}
												</p>
											</div>
											<div className="text-right">
												<div className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
													{item.version}
												</div>
											</div>
										</div>

										{/* Tags */}
										<div className="flex flex-wrap gap-2 mb-4">
											{item.tags.map((tag) => (
												<span
													key={tag}
													className="text-xs bg-glow-blue/20 text-glow-blue px-2 py-1 rounded-full"
												>
													{tag}
												</span>
											))}
										</div>

										{/* Stats */}
										<div className="flex items-center justify-between text-sm text-white/60 mb-4">
											<div className="flex items-center space-x-4">
												<span className="flex items-center space-x-1">
													<Download className="w-4 h-4" />
													<span>{item.downloads}</span>
												</span>
												<span className="flex items-center space-x-1">
													<Star className="w-4 h-4 text-yellow-400" />
													<span>{item.rating}</span>
												</span>
											</div>
										</div>

										{/* Action Buttons */}
										<div className="flex space-x-3">
											<button className="flex-1 btn-primary text-sm py-2">
												<Download className="w-4 h-4 mr-2" />
												Download
											</button>
											<a
												href={item.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 btn-outline text-sm py-2 flex items-center justify-center"
											>
												<ExternalLink className="w-4 h-4 mr-2" />
												GitHub
											</a>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					))}
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
							Want to <span className="text-gradient">Contribute</span>?
						</h2>
						<p className="text-xl text-white/70 mb-8">
							These projects are open source! Feel free to contribute, report
							issues, or suggest new features
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://github.com/Slydog9696"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-primary text-lg px-8 py-4"
							>
								View on GitHub
								<ExternalLink className="w-5 h-5 ml-2" />
							</a>
							<Link href="/contact" className="btn-secondary text-lg px-8 py-4">
								Get in Touch
								<ArrowRight className="w-5 h-5 ml-2" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
