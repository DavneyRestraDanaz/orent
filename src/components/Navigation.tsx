'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Menu, X, User, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/konsol', label: 'Konsol' },
    { href: '/pricing', label: 'Paket' },
    { href: '/about', label: 'Tentang' },
    { href: '/blog', label: 'Blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 px-2 py-1 rounded-lg hover:bg-secondary/50 transition-colors">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Orent</h1>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/dashboard" 
              className={`p-2 rounded-lg transition-colors ${
                isActive('/dashboard')
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary-teal hover:bg-primary text-primary-foreground'
              }`}
              title="Dashboard"
            >
              <LayoutDashboard className="w-5 h-5" />
            </Link>
            <Link 
              href="/profile" 
              className={`p-2 rounded-lg transition-colors border ${
                isActive('/profile')
                  ? 'bg-accent/50 border-primary-yellow text-primary-yellow'
                  : 'border-border hover:bg-accent text-foreground hover:text-primary-yellow'
              }`}
              title="Profile"
            >
              <User className="w-5 h-5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary-blue text-primary-foreground'
                    : 'text-foreground hover:bg-secondary hover:text-primary-yellow'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/dashboard" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ps-border relative ${
                isActive('/dashboard')
                  ? 'bg-primary-blue text-primary-foreground'
                  : 'bg-primary-teal hover:bg-primary-blue text-primary-foreground'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              href="/profile" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors border ${
                isActive('/profile')
                  ? 'bg-white/20 border-primary-yellow text-primary-yellow'
                  : 'border-border hover:bg-secondary text-foreground hover:text-primary-yellow'
              }`}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
