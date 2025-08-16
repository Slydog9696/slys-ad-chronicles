/**
 * SERVICES PAGE COMPONENT
 *
 * This file renders the services page at the /services route
 *
 * File: app/services/page.tsx
 * Route: /services
 * Purpose: Showcase of services offered including Discord bots, web development, and consulting
 */

'use client';

import { motion } from 'framer-motion';
import {
	ArrowRight,
	Bot,
	Code,
	Gamepad2,
	Globe,
	MessageSquare,
	Monitor,
	Palette,
	Server,
	Settings,
	Shield,
	Smartphone,
	Users,
	Wrench,
	Zap,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ServicesPage() {
	const services = [
		{
			id: 'discord-bots',
			title: 'Discord Bot Development',
			icon: Bot,
			description:
				'Custom Discord bots designed to enhance your community experience with moderation, entertainment, and utility features.',
			color: 'from-tech-blue to-cyber-teal',
			features: [
				'Community Management & Moderation',
				'Music & Entertainment Bots',
				'Utility & Information Bots',
				'Custom Command Systems',
				'Analytics & Reporting',
				'Multi-Server Support',
			],
			technologies: [
				'Discord.js v14',
				'Node.js',
				'MongoDB/PostgreSQL',
				'Redis',
				'Docker',
			],
			process: [
				'Requirements Analysis',
				'Bot Architecture Design',
				'Development & Testing',
				'Deployment & Hosting',
				'Documentation & Training',
				'Ongoing Support',
			],
			startingPrice: '$299',
			deliveryTime: '2-4 weeks',
		},
		{
			id: 'web-development',
			title: 'Web Development',
			icon: Globe,
			description:
				'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
			color: 'from-farm-gold to-sunset-orange',
			features: [
				'Responsive Design & Mobile-First',
				'Full-Stack Applications',
				'E-commerce Solutions',
				'Content Management Systems',
				'API Development & Integration',
				'Performance Optimization',
			],
			technologies: [
				'React/Next.js',
				'Node.js',
				'Firebase',
				'Tailwind CSS',
				'TypeScript',
				'PostgreSQL',
			],
			process: [
				'Project Planning & Wireframing',
				'UI/UX Design',
				'Frontend & Backend Development',
				'Testing & Quality Assurance',
				'Deployment & Launch',
				'Maintenance & Updates',
			],
			startingPrice: '$1,499',
			deliveryTime: '4-8 weeks',
		},
		{
			id: 'game-servers',
			title: 'Game Server Management',
			icon: Gamepad2,
			description:
				'Professional game server setup, configuration, and ongoing management for optimal performance and player experience.',
			color: 'from-pasture-green to-cyber-teal',
			features: [
				'Server Setup & Configuration',
				'Mod Installation & Management',
				'Performance Optimization',
				'Backup & Recovery Systems',
				'Player Management Tools',
				'24/7 Monitoring',
			],
			technologies: [
				'Linux',
				'Docker',
				'Python',
				'Shell Scripting',
				'Web Panels',
				'Monitoring Tools',
			],
			process: [
				'Server Requirements Analysis',
				'Infrastructure Setup',
				'Game Server Installation',
				'Mod & Plugin Configuration',
				'Performance Tuning',
				'Ongoing Management',
			],
			startingPrice: '$199',
			deliveryTime: '1-2 weeks',
		},
		{
			id: 'chrome-extensions',
			title: 'Chrome Extension Development',
			icon: Zap,
			description:
				'Custom Chrome extensions that enhance productivity, automate tasks, and improve your browsing experience.',
			color: 'from-glow-orange to-glow-blue',
			features: [
				'Productivity Tools',
				'Content Enhancement',
				'Data Collection & Analysis',
				'Custom UI Elements',
				'Cross-Platform Compatibility',
				'Chrome Web Store Publishing',
			],
			technologies: [
				'JavaScript',
				'Chrome APIs',
				'HTML/CSS',
				'Manifest V3',
				'Web APIs',
				'Local Storage',
			],
			process: [
				'Extension Concept Design',
				'API Integration Planning',
				'Frontend Development',
				'Chrome API Implementation',
				'Testing & Debugging',
				'Store Publishing Support',
			],
			startingPrice: '$399',
			deliveryTime: '2-3 weeks',
		},
		{
			id: 'api-development',
			title: 'API Development',
			icon: Code,
			description:
				'Robust, scalable APIs designed to power your applications with secure, efficient data exchange capabilities.',
			color: 'from-purple-500 to-pink-500',
			features: [
				'RESTful API Design',
				'GraphQL Implementation',
				'Authentication & Authorization',
				'Rate Limiting & Security',
				'API Documentation',
				'Testing & Monitoring',
			],
			technologies: [
				'Node.js/Express',
				'Python/FastAPI',
				'PostgreSQL/MongoDB',
				'JWT/OAuth',
				'Swagger',
				'Docker',
			],
			process: [
				'API Requirements Analysis',
				'Database Schema Design',
				'Endpoint Development',
				'Security Implementation',
				'Testing & Documentation',
				'Deployment & Monitoring',
			],
			startingPrice: '$799',
			deliveryTime: '3-5 weeks',
		},
		{
			id: 'consulting',
			title: 'Technical Consulting',
			icon: Users,
			description:
				'Expert technical guidance to help you make informed decisions about technology choices and implementation strategies.',
			color: 'from-indigo-500 to-blue-500',
			features: [
				'Technology Stack Review',
				'Architecture Planning',
				'Performance Optimization',
				'Security Audits',
				'Migration Strategies',
				'Team Training',
			],
			technologies: [
				'Various',
				'Best Practices',
				'Industry Standards',
				'Security Frameworks',
				'Performance Tools',
			],
			process: [
				'Current State Assessment',
				'Requirements Gathering',
				'Solution Design',
				'Implementation Planning',
				'Documentation & Training',
				'Follow-up Support',
			],
			startingPrice: '$150/hr',
			deliveryTime: 'Flexible',
		},
	];

	const processSteps = [
		{
			step: '01',
			title: 'Discovery & Planning',
			description:
				'We start by understanding your needs, goals, and requirements to create a comprehensive project plan.',
			icon: Settings,
		},
		{
			step: '02',
			title: 'Design & Architecture',
			description:
				'Our team designs the solution architecture and creates detailed wireframes and mockups.',
			icon: Palette,
		},
		{
			step: '03',
			title: 'Development & Testing',
			description:
				'We build your solution using best practices, with continuous testing and quality assurance.',
			icon: Code,
		},
		{
			step: '04',
			title: 'Deployment & Launch',
			description:
				'Your project is deployed to production with proper monitoring and performance optimization.',
			icon: Zap,
		},
		{
			step: '05',
			title: 'Support & Maintenance',
			description:
				'We provide ongoing support, updates, and maintenance to ensure your solution continues to perform.',
			icon: Shield,
		},
	];

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
							My <span className="text-gradient">Services</span>
						</h1>
						<p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto font-farm">
							Comprehensive technical solutions designed to bring your ideas to
							life and solve real-world problems
						</p>
					</motion.div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							What I <span className="text-gradient">Offer</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							From Discord bots to full-stack web applications, I provide
							end-to-end solutions tailored to your specific needs
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="card group hover:scale-105 transition-transform duration-300"
							>
								{/* Service Header */}
								<div className="flex items-start space-x-4 mb-6">
									<div
										className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
									>
										{/* Icon temporarily removed for debugging */}
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-tech text-white mb-2">
											{service.title}
										</h3>
										<p className="text-white/70 leading-relaxed">
											{service.description}
										</p>
									</div>
								</div>

								{/* Features */}
								<div className="mb-6">
									<h4 className="text-lg font-tech text-white mb-3">
										Key Features:
									</h4>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
										{service.features.map((feature) => (
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
										{service.technologies.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/60"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Process */}
								<div className="mb-6">
									<h4 className="text-lg font-tech text-white mb-3">
										Development Process:
									</h4>
									<div className="space-y-2">
										{service.process.map((step, stepIndex) => (
											<div
												key={stepIndex}
												className="flex items-center space-x-3"
											>
												<span className="w-6 h-6 bg-glow-blue/20 text-glow-blue text-xs rounded-full flex items-center justify-center font-medium">
													{stepIndex + 1}
												</span>
												<span className="text-white/70 text-sm">{step}</span>
											</div>
										))}
									</div>
								</div>

								{/* Pricing & Timeline */}
								<div className="flex items-center justify-between pt-4 border-t border-white/20">
									<div className="text-center">
										<div className="text-2xl font-tech text-white">
											{service.startingPrice}
										</div>
										<div className="text-white/60 text-sm">Starting Price</div>
									</div>
									<div className="text-center">
										<div className="text-lg font-tech text-white">
											{service.deliveryTime}
										</div>
										<div className="text-white/60 text-sm">Delivery Time</div>
									</div>
								</div>

								{/* CTA Button */}
								<Link
									href={`/contact?service=${service.id}`}
									className="w-full btn-primary text-center mt-6 group-hover:scale-105 transition-transform duration-200"
								>
									Get Started
									<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-20 bg-black/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							My <span className="text-gradient">Process</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							A proven methodology that ensures quality, transparency, and
							successful project delivery
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
						{processSteps.map((step, index) => (
							<motion.div
								key={step.step}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="text-center"
							>
								<div className="relative">
									<div className="w-20 h-20 bg-gradient-to-br from-glow-blue to-cyber-teal rounded-full flex items-center justify-center mx-auto mb-6">
										{/* Icon temporarily removed for debugging */}
									</div>
									{index < processSteps.length - 1 && (
										<div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-glow-blue to-transparent transform translate-x-4"></div>
									)}
								</div>
								<div className="text-4xl font-tech text-glow-blue mb-2">
									{step.step}
								</div>
								<h3 className="text-xl font-tech text-white mb-3">
									{step.title}
								</h3>
								<p className="text-white/70 text-sm leading-relaxed">
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Me Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Why <span className="text-gradient">Choose Me</span>?
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							Unique combination of technical expertise and practical
							problem-solving experience
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="card text-center"
						>
							<div className="w-16 h-16 bg-gradient-to-br from-farm-gold to-sunset-orange rounded-xl flex items-center justify-center mx-auto mb-6">
								<Wrench className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-tech text-white mb-3">
								Practical Experience
							</h3>
							<p className="text-white/70">
								Years of hands-on experience with real-world applications, from
								farming equipment to cloud infrastructure
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="card text-center"
						>
							<div className="w-16 h-16 bg-gradient-to-br from-tech-blue to-cyber-teal rounded-xl flex items-center justify-center mx-auto mb-6">
								<Code className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-tech text-white mb-3">
								Modern Technology
							</h3>
							<p className="text-white/70">
								Always up-to-date with the latest technologies and best
								practices in software development
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="card text-center"
						>
							<div className="w-16 h-16 bg-gradient-to-br from-pasture-green to-glow-blue rounded-xl flex items-center justify-center mx-auto mb-6">
								<Users className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-tech text-white mb-3">
								Community Focus
							</h3>
							<p className="text-white/70">
								Building solutions that bring people together and solve real
								community needs
							</p>
						</motion.div>
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
							Ready to <span className="text-gradient">Get Started</span>?
						</h2>
						<p className="text-xl text-white/70 mb-8">
							Let's discuss your project requirements and create a custom
							solution that fits your needs and budget
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact" className="btn-primary text-lg px-8 py-4">
								Start a Project
								<ArrowRight className="w-5 h-5 ml-2" />
							</Link>
							<Link href="/portfolio" className="btn-outline text-lg px-8 py-4">
								View My Work
								<Code className="w-5 h-5 ml-2" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
