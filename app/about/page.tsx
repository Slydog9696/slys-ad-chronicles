/**
 * ABOUT PAGE COMPONENT
 *
 * This file renders the about page at the /about route
 *
 * File: app/about/page.tsx
 * Route: /about
 * Purpose: Personal and professional information about David Campbell
 */

'use client';

import { motion } from 'framer-motion';
import {
	Award,
	BookOpen,
	CircuitBoard,
	Code,
	Database,
	Gamepad2,
	GraduationCap,
	Heart,
	MapPin,
	Server,
	Star,
	Users,
	Wrench,
	Zap,
} from 'lucide-react';
import React from 'react';

export default function AboutPage() {
	const skills = [
		{
			category: 'Programming Languages',
			items: [
				'JavaScript/TypeScript',
				'Python',
				'C#',
				'Java',
				'HTML/CSS',
				'SQL',
			],
			color: 'from-tech-blue to-cyber-teal',
		},
		{
			category: 'Frameworks & Libraries',
			items: [
				'React/Next.js',
				'Node.js',
				'Discord.js',
				'Express',
				'Prisma',
				'Tailwind CSS',
			],
			color: 'from-farm-gold to-sunset-orange',
		},
		{
			category: 'Tools & Platforms',
			items: ['Firebase', 'Docker', 'Git', 'Visual Studio', 'VS Code', 'Figma'],
			color: 'from-pasture-green to-cyber-teal',
		},
		{
			category: 'Specializations',
			items: [
				'Discord Bot Development',
				'Web Development',
				'Game Server Management',
				'API Development',
			],
			color: 'from-glow-orange to-glow-blue',
		},
	];

	const experiences = [
		{
			year: '2020 - Present',
			title: 'Full-Stack Developer & Tech Consultant',
			company: 'DC Global Enterprises, LLC',
			description:
				'Leading development of Discord bots, web applications, and technical solutions for clients.',
		},
		{
			year: '2019 - Present',
			title: 'Discord Bot Developer',
			company: 'Independent',
			description:
				'Created 15+ Discord bots for gaming communities, businesses, and educational purposes.',
		},
		{
			year: '2018 - Present',
			title: 'Game Server Administrator',
			company: 'Various Gaming Communities',
			description:
				'Managed ARK, Minecraft, and other game servers with custom mods and automation.',
		},
		{
			year: '2015 - Present',
			title: 'Hardware & Electronics Technician',
			company: 'Independent',
			description:
				'Circuit board repair, PC building, and technical troubleshooting for local businesses.',
		},
	];

	const certifications = [
		{
			icon: Award,
			title: 'CompTIA A+ Certification',
			description:
				'Professional IT certification covering hardware, software, and troubleshooting',
			year: '2020',
			color: 'from-farm-gold to-sunset-orange',
			details: [
				'Hardware and Software Troubleshooting',
				'Operating System Installation and Configuration',
				'Network Configuration and Security',
				'Mobile Device Support',
				'Virtualization and Cloud Computing',
			],
		},
		{
			icon: CircuitBoard,
			title: 'Electronic Technician Experience',
			description:
				'Extensive experience in electronics repair and circuit board troubleshooting',
			year: '2015 - Present',
			color: 'from-pasture-green to-cyber-teal',
			details: [
				'Circuit Board Repair and Testing',
				'Component-Level Troubleshooting',
				'PC Building and Customization',
				'Hardware Diagnostics and Repair',
				'Electronics Assembly and Testing',
			],
		},
		{
			icon: BookOpen,
			title: 'PC Knowledge Base',
			description:
				'Comprehensive knowledge base covering all aspects of PC hardware and software',
			year: 'Ongoing',
			color: 'from-tech-blue to-glow-blue',
			details: [
				'Hardware Specifications and Compatibility',
				'Software Installation and Configuration',
				'System Optimization and Performance',
				'Troubleshooting Methodologies',
				'Industry Best Practices',
			],
		},
	];

	const values = [
		{
			icon: Heart,
			title: 'Passion-Driven',
			description: 'Every project is fueled by genuine interest and curiosity',
			color: 'from-red-500 to-pink-500',
		},
		{
			icon: Users,
			title: 'Community-Focused',
			description:
				'Building tools that bring people together and solve real problems',
			color: 'from-blue-500 to-indigo-500',
		},
		{
			icon: Zap,
			title: 'Innovation-Minded',
			description: 'Always exploring new technologies and creative solutions',
			color: 'from-yellow-500 to-orange-500',
		},
		{
			icon: Star,
			title: 'Quality-Conscious',
			description: 'Delivering polished, reliable, and user-friendly solutions',
			color: 'from-purple-500 to-pink-500',
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
							About <span className="text-gradient">Me</span>
						</h1>
						<p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto font-farm">
							From cattle pastures to cloud networking, I bridge the gap between
							traditional wisdom and cutting-edge technology
						</p>
					</motion.div>
				</div>
			</section>

			{/* Personal Story Section */}
			<section className="py-20 bg-black/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-4xl font-tech text-white mb-6">
								The <span className="text-gradient">Story</span> Behind the Code
							</h2>
							<div className="space-y-4 text-white/80">
								<p>
									Growing up in Northern Alabama, I learned the value of hard
									work and practical problem-solving from my family's farming
									background. While working with cattle and maintaining
									equipment, I developed a deep appreciation for systems that
									work reliably and efficiently.
								</p>
								<p>
									My journey into technology began with a curiosity about how
									things work - from circuit boards to software applications.
									This led me to teach myself programming, starting with simple
									scripts and evolving into complex applications that serve real
									communities.
								</p>
								<p>
									Today, I combine the practical wisdom of farming with the
									innovative spirit of technology, creating solutions that are
									both robust and user-friendly. Whether it's a Discord bot for
									a gaming community or a web application for a local business,
									I approach every project with the same attention to detail and
									reliability.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative"
						>
							<div className="bg-gradient-to-br from-farm-gold/20 to-tech-blue/20 rounded-2xl p-8 border border-white/20">
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<MapPin className="w-6 h-6 text-farm-gold" />
										<span className="text-white">Northern Alabama, USA</span>
									</div>
									<div className="flex items-center space-x-3">
										<GraduationCap className="w-6 h-6 text-tech-blue" />
										<span className="text-white">Self-Taught Developer</span>
									</div>
									<div className="flex items-center space-x-3">
										<Heart className="w-6 h-6 text-pasture-green" />
										<span className="text-white">Farming & Technology</span>
									</div>
									<div className="flex items-center space-x-3">
										<Code className="w-6 h-6 text-glow-blue" />
										<span className="text-white">Full-Stack Development</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Certifications & Specializations Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Certifications &{' '}
							<span className="text-gradient">Specializations</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							Professional certifications and specialized knowledge areas that
							set me apart
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{certifications.map((cert, index) => (
							<motion.div
								key={cert.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="card group hover:scale-105 transition-transform duration-300"
							>
								<div
									className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									{/* Icon temporarily removed for debugging */}
								</div>
								<h3 className="text-xl font-tech text-white mb-2">
									{cert.title}
								</h3>
								<p className="text-white/70 text-sm mb-3">{cert.description}</p>
								<div className="text-farm-gold font-medium text-sm mb-4">
									{cert.year}
								</div>
								<div className="space-y-2">
									{cert.details.map((detail, detailIndex) => (
										<div
											key={detailIndex}
											className="flex items-center space-x-2"
										>
											<div className="w-2 h-2 bg-glow-blue rounded-full"></div>
											<span className="text-white/70 text-xs">{detail}</span>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="py-20 bg-black/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Technical <span className="text-gradient">Skills</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							A diverse skill set that spans from hardware repair to cloud-based
							applications
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{skills.map((skill, index) => (
							<motion.div
								key={skill.category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="card"
							>
								<div
									className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-6`}
								>
									<Code className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-tech text-white mb-4">
									{skill.category}
								</h3>
								<div className="flex flex-wrap gap-2">
									{skill.items.map((item) => (
										<span
											key={item}
											className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/80"
										>
											{item}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Professional <span className="text-gradient">Experience</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							Years of hands-on experience building solutions for real-world
							problems
						</p>
					</motion.div>

					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.title}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="card"
							>
								<div className="flex flex-col md:flex-row md:items-center justify-between">
									<div className="flex-1">
										<div className="flex items-center space-x-3 mb-2">
											<span className="text-farm-gold font-tech text-lg">
												{exp.year}
											</span>
											<div className="w-2 h-2 bg-glow-blue rounded-full"></div>
										</div>
										<h3 className="text-xl font-tech text-white mb-2">
											{exp.title}
										</h3>
										<p className="text-tech-blue font-medium mb-2">
											{exp.company}
										</p>
										<p className="text-white/70">{exp.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 bg-black/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-tech text-white mb-6">
							Core <span className="text-gradient">Values</span>
						</h2>
						<p className="text-xl text-white/70 max-w-3xl mx-auto">
							The principles that guide every project and interaction
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="text-center"
							>
								<div
									className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}
								>
									{/* Icon temporarily removed for debugging */}
								</div>
								<h3 className="text-xl font-tech text-white mb-3">
									{value.title}
								</h3>
								<p className="text-white/70 text-sm">{value.description}</p>
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
							Ready to <span className="text-gradient">Collaborate</span>?
						</h2>
						<p className="text-xl text-white/70 mb-8">
							Whether you need a Discord bot, web application, or technical
							consulting, I'm here to help bring your ideas to life
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="/contact" className="btn-primary text-lg px-8 py-4">
								Get In Touch
								<Users className="w-5 h-5 ml-2" />
							</a>
							<a href="/portfolio" className="btn-outline text-lg px-8 py-4">
								View My Work
								<Code className="w-5 h-5 ml-2" />
							</a>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
