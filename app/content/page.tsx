/**
 * CONTENT PAGE COMPONENT
 *
 * This file renders the content page at the /content route
 *
 * File: app/content/page.tsx
 * Route: /content
 * Purpose: Showcase blog posts, tutorials, and other content
 */

'use client';

import { motion } from 'framer-motion';
import {
	ArrowRight,
	Calendar,
	Clock,
	Code,
	Eye,
	Gamepad2,
	Globe,
	Heart,
	MessageCircle,
	Users,
	Wrench,
	Zap,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ContentPage() {
	const contentCategories = [
		{ id: 'all', name: 'All Content', icon: Globe, count: 25 },
		{ id: 'tutorials', name: 'Tutorials', icon: Code, count: 12 },
		{ id: 'discord-bots', name: 'Discord Bots', icon: Gamepad2, count: 8 },
		{ id: 'web-development', name: 'Web Development', icon: Globe, count: 5 },
		{ id: 'game-servers', name: 'Game Servers', icon: Wrench, count: 3 },
		{ id: 'chrome-extensions', name: 'Chrome Extensions', icon: Zap, count: 2 },
	];

	const contentItems = [
		{
			id: 'discord-bot-setup-guide',
			title: 'Complete Guide to Setting Up Your First Discord Bot',
			excerpt:
				'Learn how to create, configure, and deploy a Discord bot from scratch using Discord.js v14 and Node.js.',
			category: 'tutorials',
			tags: ['Discord.js', 'Node.js', 'Bot Development'],
			readTime: '15 min read',
			views: '2.4k',
			likes: 156,
			comments: 23,
			date: '2024-01-15',
			featured: true,
		},
		{
			id: 'nextjs-firebase-authentication',
			title: 'Building Authentication in Next.js with Firebase',
			excerpt:
				'Step-by-step guide to implementing secure user authentication using Next.js 15+ and Firebase Auth.',
			category: 'web-development',
			tags: ['Next.js', 'Firebase', 'Authentication'],
			readTime: '12 min read',
			views: '1.8k',
			likes: 134,
			comments: 18,
			date: '2024-01-10',
			featured: true,
		},
		{
			id: 'ark-server-optimization',
			title: 'ARK Server Performance Optimization Guide',
			excerpt:
				'Tips and tricks for optimizing your ARK: Survival Evolved server for better performance.',
			category: 'game-servers',
			tags: ['ARK', 'Server Management', 'Performance'],
			readTime: '20 min read',
			views: '1.2k',
			likes: 89,
			comments: 12,
			date: '2024-01-05',
			featured: false,
		},
	];

	const [selectedCategory, setSelectedCategory] = useState('all');

	const filteredContent =
		selectedCategory === 'all'
			? contentItems
			: contentItems.filter((item) => item.category === selectedCategory);

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

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
							Content & <span className="text-gradient">Tutorials</span>
						</h1>
						<p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto font-farm">
							Learn from my experiences, tutorials, and insights on Discord
							bots, web development, and technology
						</p>
					</motion.div>
				</div>
			</section>

			{/* Category Filter */}
			<section className="py-12 bg-black/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-wrap justify-center gap-4">
						{contentCategories.map((category) => (
							<button
								key={category.id}
								onClick={() => setSelectedCategory(category.id)}
								className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
									selectedCategory === category.id
										? 'bg-gradient-to-r from-glow-blue to-cyber-teal text-white shadow-lg'
										: 'bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 hover:text-white'
								}`}
							>
								{category.icon && React.createElement(category.icon, { className: "w-5 h-5" })}
								<span className="font-medium">{category.name}</span>
								<span className="bg-white/20 px-2 py-1 rounded-full text-xs">
									{category.count}
								</span>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Content Grid */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Latest <span className="text-gradient">Content</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							Browse through my articles, tutorials, and insights
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredContent.map((item, index) => (
							<motion.article
								key={item.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="card group hover:scale-105 transition-transform duration-300"
							>
								{/* Featured Badge */}
								{item.featured && (
									<div className="absolute top-4 right-4">
										<span className="px-3 py-1 bg-gradient-to-r from-farm-gold to-sunset-orange text-white text-xs rounded-full font-medium">
											Featured
										</span>
									</div>
								)}

								{/* Content Image Placeholder */}
								<div className="w-full h-40 bg-gradient-to-br from-neutral-gray to-midnight-blue rounded-lg mb-6 flex items-center justify-center">
									<Code className="w-12 h-12 text-white/40" />
								</div>

								{/* Content Info */}
								<div className="space-y-4">
									<div className="flex items-center space-x-2 text-sm text-white/60">
										<Calendar className="w-4 h-4" />
										<span>{formatDate(item.date)}</span>
										<div className="w-1 h-1 bg-white/30 rounded-full"></div>
										<Clock className="w-4 h-4" />
										<span>{item.readTime}</span>
									</div>

									<h3 className="text-xl font-tech text-white group-hover:text-glow-blue transition-colors">
										{item.title}
									</h3>

									<p className="text-white/70 text-sm leading-relaxed">
										{item.excerpt}
									</p>

									{/* Tags */}
									<div className="flex flex-wrap gap-2">
										{item.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/60"
											>
												{tag}
											</span>
										))}
									</div>

									{/* Stats & Actions */}
									<div className="flex items-center justify-between pt-4 border-t border-white/20">
										<div className="flex items-center space-x-3 text-sm text-white/60">
											<div className="flex items-center space-x-1">
												<Eye className="w-4 h-4" />
												<span>{item.views}</span>
											</div>
											<div className="flex items-center space-x-1">
												<Heart className="w-4 h-4" />
												<span>{item.likes}</span>
											</div>
										</div>

										<button className="btn-outline text-sm py-2 group-hover:bg-glow-blue group-hover:text-white transition-all duration-200">
											Read More
											<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
										</button>
									</div>
								</div>
							</motion.article>
						))}
					</div>
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
							Want More <span className="text-gradient">Content</span>?
						</h2>
						<p className="text-xl text-white/70 mb-8">
							Subscribe to my newsletter or follow me on social media to stay
							updated
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
							<Link href="/contact" className="btn-outline text-lg px-8 py-4">
								Get In Touch
								<ArrowRight className="w-5 h-5 ml-2" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
