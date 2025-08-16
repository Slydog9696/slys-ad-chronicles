'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
	Code,
	Download,
	Facebook,
	Gamepad2,
	Github,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	Youtube,
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerSections = [
		{
			title: 'Quick Links',
			links: [
				{ name: 'Home', href: '/' },
				{ name: 'About', href: '/about' },
				{ name: 'Portfolio', href: '/portfolio' },
				{ name: 'Services', href: '/services' },
				{ name: 'Gaming & Tech', href: '/gaming-tech' },
				{ name: 'Agricultural', href: '/agricultural' },
				{ name: 'Downloads', href: '/downloads' },
				{ name: 'Contact', href: '/contact' },
			],
		},
		{
			title: 'Services',
			links: [
				{ name: 'Discord Bot Development', href: '/services#discord-bots' },
				{ name: 'Web Development', href: '/services#web-development' },
				{ name: 'Game Server Management', href: '/services#game-servers' },
				{ name: 'Chrome Extensions', href: '/services#chrome-extensions' },
				{ name: 'API Development', href: '/services#api-development' },
				{ name: 'Technical Consulting', href: '/services#consulting' },
			],
		},
		{
			title: 'Downloads',
			links: [
				{ name: 'Discord Bots', href: '/downloads#discord-bots' },
				{ name: 'Chrome Extensions', href: '/downloads#chrome-extensions' },
				{ name: 'Web Applications', href: '/downloads#web-apps' },
				{ name: 'Game Mods', href: '/downloads#game-mods' },
				{ name: 'Development Tools', href: '/downloads#dev-tools' },
				{ name: 'Templates', href: '/downloads#templates' },
			],
		},
		{
			title: 'Connect',
			links: [
				{ name: 'Discord Community', href: 'https://discord.gg/5YQkJF6Znf' },
				{
					name: 'YouTube Channel',
					href: 'https://www.youtube.com/@SlysAnalogandDigitalChronicles',
				},
				{ name: 'GitHub Profile', href: 'https://github.com/Slydog9696' },
				{
					name: 'Facebook Business',
					href: 'https://www.facebook.com/DCEnterprises',
				},
				{ name: 'LinkedIn', href: '#' },
				{ name: 'Email', href: 'mailto:contact@dcglobal.com' },
			],
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

	return (
		<footer className="bg-black/40 backdrop-blur-md border-t border-white/20 mt-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
					{/* Brand Section */}
					<div className="lg:col-span-1">
						<Link href="/" className="flex items-center space-x-2 mb-4">
							<div className="w-12 h-12 bg-gradient-to-br from-farm-gold to-tech-blue rounded-lg flex items-center justify-center">
								<Gamepad2 className="w-7 h-7 text-white" />
							</div>
							<div>
								<span className="text-xl font-tech text-white">
									<span className="text-farm-gold">Sly</span>
									<span className="text-tech-blue">'s</span>
								</span>
								<div className="text-sm text-white/70">Chronicles</div>
							</div>
						</Link>
						<p className="text-white/70 text-sm mb-4 font-farm">
							"A Digital Tinkerer with an Analog Soul - Bridging Silicon & Soil,
							One Bit at a Time"
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((social) => (
								<motion.a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className={`text-white/60 ${social.color} transition-colors duration-200`}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									<social.icon className="w-5 h-5" />
								</motion.a>
							))}
						</div>
					</div>

					{/* Footer Sections */}
					{footerSections.map((section) => (
						<div key={section.title}>
							<h3 className="text-white font-tech text-lg mb-4">
								{section.title}
							</h3>
							<ul className="space-y-2">
								{section.links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-white/60 hover:text-glow-blue transition-colors duration-200 text-sm"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Company Info */}
				<div className="border-t border-white/20 pt-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
						<div className="flex items-center space-x-3">
							<MapPin className="w-5 h-5 text-farm-gold" />
							<span className="text-white/70 text-sm">
								Northern Alabama, USA
							</span>
						</div>
						<div className="flex items-center space-x-3">
							<Mail className="w-5 h-5 text-tech-blue" />
							<span className="text-white/70 text-sm">
								contact@dcglobal.com
							</span>
						</div>
						<div className="flex items-center space-x-3">
							<Phone className="w-5 h-5 text-cyber-teal" />
							<span className="text-white/70 text-sm">+1 (XXX) XXX-XXXX</span>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-white/60 text-sm">
							© {currentYear} DC Global Enterprises, LLC. All rights reserved.
						</div>
						<div className="flex items-center space-x-6 text-sm">
							<Link
								href="/privacy"
								className="text-white/60 hover:text-white transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-white/60 hover:text-white transition-colors"
							>
								Terms of Service
							</Link>
							<Link
								href="/cookies"
								className="text-white/60 hover:text-white transition-colors"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

