'use client';

import React, { AnimatePresence, motion } from 'framer-motion';
import {
	Briefcase,
	Code,
	Download,
	Gamepad2,
	Home,
	Info,
	Menu,
	MessageSquare,
	User,
	X,
	Wrench,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const navItems = [
		{ name: 'Home', href: '/', icon: Home },
		{ name: 'About', href: '/about', icon: Info },
		{ name: 'Portfolio', href: '/portfolio', icon: Briefcase },
		{ name: 'Services', href: '/services', icon: Code },
		{ name: 'Gaming & Tech', href: '/gaming-tech', icon: Gamepad2 },
		{ name: 'Agricultural', href: '/agricultural', icon: Wrench },
		{ name: 'Downloads', href: '/downloads', icon: Download },
		{ name: 'Content', href: '/content', icon: MessageSquare },
		{ name: 'Contact', href: '/contact', icon: MessageSquare },
	];

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<div className="w-10 h-10 bg-gradient-to-br from-farm-gold to-tech-blue rounded-lg flex items-center justify-center">
							<Gamepad2 className="w-6 h-6 text-white" />
						</div>
						<span className="text-xl font-tech text-white">
							<span className="text-farm-gold">Sly</span>
							<span className="text-tech-blue">'s</span>
							<span className="text-white"> Chronicles</span>
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-1 group"
							>
								<item.icon className="w-4 h-4 group-hover:text-glow-blue transition-colors" />
								<span>{item.name}</span>
							</Link>
						))}
					</div>

					{/* Auth Buttons */}
					<div className="hidden md:flex items-center space-x-4">
						{isLoggedIn ? (
							<div className="flex items-center space-x-2">
								<User className="w-5 h-5 text-white" />
								<span className="text-white">Profile</span>
							</div>
						) : (
							<div className="flex items-center space-x-3">
								<Link href="/auth/login" className="btn-outline text-sm">
									Login
								</Link>
								<Link href="/auth/signup" className="btn-primary text-sm">
									Sign Up
								</Link>
							</div>
						)}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-white hover:text-glow-blue transition-colors duration-200"
						>
							{isOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/20"
					>
						<div className="px-4 py-6 space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setIsOpen(false)}
									className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200 py-2"
								>
									<item.icon className="w-5 h-5" />
									<span>{item.name}</span>
								</Link>
							))}

							<div className="pt-4 border-t border-white/20">
								{isLoggedIn ? (
									<div className="flex items-center space-x-2 text-white">
										<User className="w-5 h-5" />
										<span>Profile</span>
									</div>
								) : (
									<div className="space-y-3">
										<Link
											href="/auth/login"
											onClick={() => setIsOpen(false)}
											className="btn-outline w-full text-center"
										>
											Login
										</Link>
										<Link
											href="/auth/signup"
											onClick={() => setIsOpen(false)}
											className="btn-primary w-full text-center"
										>
											Sign Up
										</Link>
									</div>
								)}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navigation;

