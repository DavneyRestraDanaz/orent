'use client';

import { motion } from 'framer-motion';
import { Gamepad2, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
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

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Orent</span>
            </div>
            <p className="text-muted-foreground">
              Sewa PlayStation 3 dan PlayStation 4 terpercaya di Bandung dengan harga terjangkau dan pelayanan terbaik.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors border border-transparent hover:border-primary-foreground"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary-red rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-red/80 transition-colors border border-transparent hover:border-primary-foreground"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary-teal rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-teal/80 transition-colors border border-transparent hover:border-primary-foreground"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Menu Utama</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Perusahaan</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bandung, Jawa Barat</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@orent.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 Orent. Sewa PlayStation Terpercaya di Bandung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
