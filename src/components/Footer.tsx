'use client';

import { motion } from 'framer-motion';
import { Gamepad2, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/konsol', label: 'Konsol' },
    { href: '/pricing', label: 'Paket' },
  ];

  const companyLinks = [
    { href: '/about', label: 'Tentang Kami' },
    { href: '/blog', label: 'Blog' },
    { href: '/terms', label: 'Syarat & Ketentuan' },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  // X Twitter Logo Component
  const XTwitterIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z"/>
    </svg>
  );

  return (
    <footer className="bg-[#4b5563] border-t border-border relative z-10" style={{ backgroundColor: '#333333', backgroundImage: 'none', backdropFilter: 'none' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Gamepad2 className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">Orent</span>
            </div>
            <p className="text-gray-300">
              Sewa PlayStation 3 dan PlayStation 4 terpercaya di Bandung dengan harga terjangkau dan pelayanan terbaik.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-transparent"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-transparent"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-transparent"
              >
                <XTwitterIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Menu Utama</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Perusahaan</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-white" />
                <span>Bandung, Jawa Barat</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-white" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-white" />
                <span>info@orent.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Orent. Sewa PlayStation Terpercaya di Bandung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
