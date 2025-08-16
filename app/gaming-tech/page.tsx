/**
 * GAMING & TECH PAGE COMPONENT
 *
 * This file renders the gaming and tech page at the /gaming-tech route
 *
 * File: app/gaming-tech/page.tsx
 * Route: /gaming-tech
 * Purpose: Showcase gaming projects, achievements, and hardware/electronics work
 */

'use client';

import { motion } from 'framer-motion';
import {
	Gamepad2,
	Server,
	Code,
	Wrench,
	Zap,
	Users,
	Star,
	ExternalLink,
	Download,
	Monitor,
	CircuitBoard,
	Database,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function GamingTechPage() {
	const gamingProjects = [
		{
			id: 'ark-server-manager',
			title: 'ARK: Survival Evolved Server Manager',
			description: 'Comprehensive server management tool with mod management, backups, and monitoring',
			features: [
				'Automated Mod Installation',
				'Backup & Recovery Systems',
				'Performance Monitoring',
				'Player Management Tools',
				'Web Dashboard Interface'
			],
			technologies: ['Python', 'Docker', 'Linux', 'Shell Scripting', 'Web APIs'],
			status: 'Active',
			players: '100+',
			rating: 4.9,
			downloads: '2.1k+',
			githubUrl: 'https://github.com/Slydog9696/ARK-Server-Manager',
			color: 'from-pasture-green to-cyber-teal'
		},
		{
			id: 'minecraft-server-tools',
			title: 'Minecraft Server Utilities',
			description: 'Collection of tools for managing Minecraft servers and communities',
			features: [
				'Plugin Management',
				'World Backup Systems',
				'Player Analytics',
				'Custom Commands',
				'Resource Pack Management'
			],
			technologies: ['Java', 'Spigot API', 'MySQL', 'Web Panels'],
			status: 'Active',
			players: '50+',
			rating: 4.7,
			downloads: '1.5k+',
			githubUrl: 'https://github.com/Slydog9696/Minecraft-Server-Tools',
			color: 'from-farm-gold to-sunset-orange'
		},
		{
			id: 'game-mod-collection',
			title: 'Game Modification Collection',
			description: 'Curated collection of game mods and custom content',
			features: [
				'ARK Stack Mods',
				'Custom Resource Packs',
				'Performance Optimizations',
				'Quality Assurance',
				'Community Support'
			],
			technologies: ['Mod Development', 'Asset Creation', 'Testing Tools'],
			status: 'Active',
			users: '500+',
			rating: 4.8,
			downloads: '3.2k+',
			githubUrl: 'https://github.com/Slydog9696/Game-Mod-Collection',
			color: 'from-glow-orange to-glow-blue'
		}
	];

	const hardwareProjects = [
		{
			id: 'pc-building-guide',
			title: 'PC Building & Customization Guide',
			description: 'Comprehensive guide for building custom PCs and troubleshooting hardware issues',
			features: [
				'Component Compatibility',
				'Build Guides',
				'Troubleshooting Tips',
				'Performance Optimization',
				'Cost Analysis'
			],
			technologies: ['Hardware Knowledge', 'System Design', 'Performance Testing'],
			status: 'Ongoing',
			users: '200+',
			rating: 4.9,
			downloads: '1.8k+',
			githubUrl: 'https://github.com/Slydog9696/PC-Building-Guide',
			color: 'from-tech-blue to-cyber-teal'
		},
		{
			id: 'electronics-repair',
			title: 'Electronics Repair & Maintenance',
			description: 'Circuit board repair and electronic device troubleshooting services',
			features: [
				'Component-Level Repair',
				'Diagnostic Testing',
				'Preventive Maintenance',
				'Custom Solutions',
				'Technical Support'
			],
			technologies: ['Circuit Analysis', 'Soldering', 'Testing Equipment', 'Schematics'],
			status: 'Active',
			clients: '50+',
			rating: 4.8,
			successRate: '95%',
			githubUrl: 'https://github.com/Slydog9696/Electronics-Repair',
			color: 'from-barn-red to-soil-brown'
		}
	];

	// const techAchievements = [
	// 	{
	// 		icon: Server,
	// 		title: 'Server Management',
	// 		description: 'Successfully managed 10+ game servers with 1000+ concurrent players',
	// 		metric: '1000+ Players',
	// 		color: 'from-tech-blue to-cyber-teal'
	// 	},
	// 	{
	// 		icon: Code,
	// 		title: 'Mod Development',
	// 		description: 'Created and maintained 20+ game modifications and custom content',
	// 		metric: '20+ Mods',
	// 		color: 'from-farm-gold to-sunset-orange'
	// 	},
	// 	{
	// 		icon: Wrench,
	// 		title: 'Hardware Repair',
	// 		description: 'Repaired and restored 100+ electronic devices and computers',
	// 		metric: '100+ Devices',
	// 		color: 'from-pasture-green to-cyber-teal'
	// 	},
	// 	{
	// 		icon: Users,
	// 		title: 'Community Building',
	// 		description: 'Built and managed gaming communities with 500+ active members',
	// 		metric: '500+ Members',
	// 		color: 'from-glow-orange to-glow-blue'
	// 	}
	// ];

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
							Gaming & <span className="text-gradient">Tech</span>
						</h1>
						<p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto font-farm">
							From ARK server management to circuit board repair - bridging the gap between
							virtual worlds and physical hardware
						</p>
					</motion.div>
				</div>
			</section>

			{/* Tech Achievements Section - Temporarily removed for debugging */}

			{/* Gaming Projects Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Gaming <span className="text-gradient">Projects</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							Server management tools, mods, and gaming utilities that enhance player experiences
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{gamingProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="card group hover:scale-105 transition-transform duration-300"
							>
								<div className="flex items-start space-x-4 mb-6">
									<div
										className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}
									>
										<Gamepad2 className="w-8 h-8 text-white" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-tech text-white mb-2">
											{project.title}
										</h3>
										<p className="text-white/70 leading-relaxed">
											{project.description}
										</p>
									</div>
								</div>

								{/* Features */}
								<div className="mb-6">
									<h4 className="text-lg font-tech text-white mb-3">
										Key Features:
									</h4>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
										{project.features.map((feature) => (
											<div
												key={feature}
												className="flex items-center space-x-2"
											>
												<div className="w-2 h-2 bg-glow-blue rounded-full"></div>
												<span className="text-white/80 text-sm">{feature}</span>
											</div>
										))}
									</div>
								</div>

								{/* Technologies */}
								<div className="mb-6">
									<h4 className="text-lg font-tech text-white mb-3">
										Technologies:
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/60"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Stats & Actions */}
								<div className="flex items-center justify-between pt-4 border-t border-white/20">
									<div className="flex items-center space-x-4 text-sm text-white/60">
										<div className="flex items-center space-x-1">
											<Users className="w-4 h-4" />
											<span>{project.players || project.users}</span>
										</div>
										<div className="flex items-center space-x-1">
											<Star className="w-4 h-4 text-yellow-400" />
											<span>{project.rating}</span>
										</div>
										<div className="flex items-center space-x-1">
											<Download className="w-4 h-4" />
											<span>{project.downloads}</span>
										</div>
									</div>

									<div className="flex items-center space-x-2">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
											title="View on GitHub"
										>
											<ExternalLink className="w-4 h-4 text-white" />
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Hardware & Electronics Section */}
			<section className="py-20 bg-black/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Hardware & <span className="text-gradient">Electronics</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							From PC building to circuit board repair - practical hardware expertise
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{hardwareProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="card group hover:scale-105 transition-transform duration-300"
							>
								<div className="flex items-start space-x-4 mb-6">
									<div
										className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}
									>
										<Wrench className="w-8 h-8 text-white" />
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-tech text-white mb-2">
											{project.title}
										</h3>
										<p className="text-white/70 leading-relaxed">
											{project.description}
										</p>
									</div>
								</div>

								{/* Features */}
								<div className="mb-6">
									<h4 className="text-lg font-tech text-white mb-3">
										Services:
									</h4>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
										{project.features.map((feature) => (
											<div
												key={feature}
												className="flex items-center space-x-2"
											>
												<div className="w-2 h-2 bg-glow-blue rounded-full"></div>
												<span className="text-white/80 text-sm">{feature}</span>
											</div>
										))}
									</div>
								</div>

								{/* Technologies */}
								<div className="mb-6">
									<h4 className="text-lg font-tech text-white mb-3">
										Expertise:
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/60"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Stats & Actions */}
								<div className="flex items-center justify-between pt-4 border-t border-white/20">
									<div className="flex items-center space-x-4 text-sm text-white/60">
										<div className="flex items-center space-x-1">
											<Users className="w-4 h-4" />
											<span>{project.clients || project.users}</span>
										</div>
										<div className="flex items-center space-x-1">
											<Star className="w-4 h-4 text-yellow-400" />
											<span>{project.rating}</span>
										</div>
										{project.successRate && (
											<div className="flex items-center space-x-1">
												<Zap className="w-4 h-4 text-green-400" />
												<span>{project.successRate}</span>
											</div>
										)}
									</div>

									<div className="flex items-center space-x-2">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
											title="View on GitHub"
										>
											<ExternalLink className="w-4 h-4 text-white" />
										</a>
									</div>
								</div>
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
						<h2 className="text-4xl font-tech text-white mb-6">
							Ready to <span className="text-gradient">Level Up</span>?
						</h2>
						<p className="text-xl text-white/70 mb-8">
							Whether you need server management tools, custom mods, or hardware support,
							I'm here to help enhance your gaming and tech experience
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact" className="btn-primary text-lg px-8 py-4">
								Get Gaming Support
								<Gamepad2 className="w-5 h-5 ml-2" />
							</Link>
							<Link href="/downloads" className="btn-outline text-lg px-8 py-4">
								Download Tools
								<Download className="w-5 h-5 ml-2" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
