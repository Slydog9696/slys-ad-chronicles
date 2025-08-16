/**
 * CONTACT PAGE COMPONENT
 *
 * This file renders the contact page at the /contact route
 *
 * File: app/contact/page.tsx
 * Route: /contact
 * Purpose: Contact form and information for getting in touch
 */

'use client';

import { motion } from 'framer-motion';
import {
	ArrowRight,
	Clock,
	Facebook,
	Github,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	Send,
	Youtube,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
		service: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle');

	const services = [
		{ value: 'discord-bot', label: 'Discord Bot Development' },
		{ value: 'web-development', label: 'Web Development' },
		{ value: 'game-server', label: 'Game Server Management' },
		{ value: 'chrome-extension', label: 'Chrome Extension' },
		{ value: 'consulting', label: 'Technical Consulting' },
		{ value: 'other', label: 'Other' },
	];

	const contactInfo = [
		{
			icon: Mail,
			title: 'Email',
			value: 'contact@dcglobal.com',
			href: 'mailto:contact@dcglobal.com',
			color: 'from-tech-blue to-cyber-teal',
		},
		{
			icon: Phone,
			title: 'Phone',
			value: '+1 (XXX) XXX-XXXX',
			href: 'tel:+1XXXXXXXXXX',
			color: 'from-farm-gold to-sunset-orange',
		},
		{
			icon: MapPin,
			title: 'Location',
			value: 'Northern Alabama, USA',
			href: '#',
			color: 'from-pasture-green to-cyber-teal',
		},
		{
			icon: Clock,
			title: 'Response Time',
			value: 'Within 24 hours',
			href: '#',
			color: 'from-glow-orange to-glow-blue',
		},
	];

	const socialLinks = [
		{
			name: 'GitHub',
			href: 'https://github.com/Slydog9696',
			icon: Github,
			color: 'hover:text-gray-400',
		},
		{
			name: 'YouTube',
			href: 'https://www.youtube.com/@SlysAnalogandDigitalChronicles',
			icon: Youtube,
			color: 'hover:text-red-500',
		},
		{
			name: 'Facebook',
			href: 'https://www.facebook.com/DCEnterprises',
			icon: Facebook,
			color: 'hover:text-blue-500',
		},
		{
			name: 'Discord',
			href: 'https://discord.gg/5YQkJF6Znf',
			icon: MessageCircle,
			color: 'hover:text-indigo-400',
		},
	];

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setSubmitStatus('success');
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
				service: '',
			});
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
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
							Get in <span className="text-gradient">Touch</span>
						</h1>
						<p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto font-farm">
							Ready to start a project or have questions? I'd love to hear from
							you
						</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Form & Info Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="lg:col-span-2"
						>
							<div className="card">
								<h2 className="text-3xl font-tech text-white mb-6">
									Send me a <span className="text-gradient">Message</span>
								</h2>

								{submitStatus === 'success' && (
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										className="bg-green-500/20 border border-green-500/30 text-green-200 px-4 py-3 rounded-lg mb-6"
									>
										Thank you! Your message has been sent successfully.
									</motion.div>
								)}

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-white/80 mb-2"
											>
												Full Name *
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												required
												className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
												placeholder="Enter your full name"
											/>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-white/80 mb-2"
											>
												Email Address *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleInputChange}
												required
												className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
												placeholder="Enter your email address"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-white/80 mb-2"
										>
											Subject *
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
											placeholder="What is this about?"
										/>
									</div>

									<div>
										<label
											htmlFor="service"
											className="block text-sm font-medium text-white/80 mb-2"
										>
											Service Needed
										</label>
										<select
											id="service"
											name="service"
											value={formData.service}
											onChange={handleInputChange}
											className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200"
										>
											<option value="">Select a service</option>
											{services.map((service) => (
												<option key={service.value} value={service.value}>
													{service.label}
												</option>
											))}
										</select>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-white/80 mb-2"
										>
											Message *
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											required
											rows={6}
											className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-glow-blue focus:border-transparent transition-all duration-200 resize-none"
											placeholder="Tell me about your project, requirements, or questions..."
										/>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{isSubmitting ? 'Sending Message...' : 'Send Message'}
									</button>
								</form>
							</div>
						</motion.div>

						{/* Contact Information */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="space-y-8"
						>
							<div className="space-y-6">
								<h3 className="text-2xl font-tech text-white mb-6">
									Contact <span className="text-gradient">Information</span>
								</h3>

								{contactInfo.map((info, index) => (
									<motion.div
										key={info.title}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: index * 0.1 }}
										className="flex items-center space-x-4"
									>
										<div
											className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center`}
										>
											{/* Icon temporarily removed for debugging */}
										</div>
										<div>
											<h4 className="text-white font-medium">{info.title}</h4>
											<a
												href={info.href}
												className="text-white/70 hover:text-glow-blue transition-colors"
											>
												{info.value}
											</a>
										</div>
									</motion.div>
								))}
							</div>

							<div className="space-y-6">
								<h3 className="text-2xl font-tech text-white mb-6">
									Connect <span className="text-gradient">Online</span>
								</h3>

								<div className="space-y-4">
									{socialLinks.map((social, index) => (
										<motion.a
											key={social.name}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.8, delay: index * 0.1 }}
											className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200 group"
										>
											<div className="w-10 h-10 bg-gradient-to-br from-neutral-gray to-midnight-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
												{/* Icon temporarily removed for debugging */}
											</div>
											<div>
												<h4 className="text-white font-medium">
													{social.name}
												</h4>
											</div>
										</motion.a>
									))}
								</div>
							</div>
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
							Ready to <span className="text-gradient">Start</span> Something
							Amazing?
						</h2>
						<p className="text-xl text-white/70 mb-8">
							Let's discuss how we can work together to bring your ideas to life
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/services" className="btn-primary text-lg px-8 py-4">
								View My Services
								<ArrowRight className="w-5 h-5 ml-2" />
							</Link>
							<Link href="/portfolio" className="btn-outline text-lg px-8 py-4">
								See My Work
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
