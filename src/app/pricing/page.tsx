'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star,
  Check,
  Crown
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface PricingPackage {
  id: string;
  name: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  popular?: boolean;
  premium?: boolean;
  features: string[];
  includes: string[];
  notIncludes?: string[];
  description: string;
}

const packages: PricingPackage[] = [
  {
    id: 'daily',
    name: 'Paket Harian',
    duration: '1 Hari',
    originalPrice: 50000,
    discountedPrice: 50000,
    discount: 0,
    description: 'Perfect untuk gaming sehari penuh',
    features: [
      '1 Konsol PlayStation',
      '2 Controller DualShock',
      '5 Game pilihan',
      'Kabel HDMI & Power'
    ],
    includes: [
      'Setup gratis',
      'Panduan penggunaan',
      'Customer support'
    ]
  },
  {
    id: 'weekend',
    name: 'Paket Weekend',
    duration: '2-3 Hari',
    originalPrice: 150000,
    discountedPrice: 120000,
    discount: 20,
    popular: true,
    description: 'Ideal untuk weekend gaming marathon',
    features: [
      '1 Konsol PlayStation',
      '2 Controller DualShock',
      '8 Game pilihan',
      'Kabel HDMI & Power',
      'Game tambahan gratis'
    ],
    includes: [
      'Setup gratis',
      'Panduan penggunaan',
      'Customer support',
      'Maintenance check'
    ]
  },
  {
    id: 'weekly',
    name: 'Paket Mingguan',
    duration: '7 Hari',
    originalPrice: 350000,
    discountedPrice: 250000,
    discount: 30,
    description: 'Best value untuk gaming jangka menengah',
    features: [
      '1 Konsol PlayStation',
      '2 Controller DualShock',
      '12 Game pilihan',
      'Kabel HDMI & Power',
      'Game swap (2x)',
      'Priority support'
    ],
    includes: [
      'Setup gratis',
      'Panduan penggunaan',
      '24/7 Customer support',
      'Maintenance check',
      'Game recommendation'
    ]
  },
  {
    id: 'monthly',
    name: 'Paket Bulanan',
    duration: '30 Hari',
    originalPrice: 1500000,
    discountedPrice: 900000,
    discount: 40,
    premium: true,
    description: 'Ultimate gaming experience',
    features: [
      '1 Konsol PlayStation',
      '4 Controller DualShock',
      'Unlimited games',
      'Kabel HDMI & Power',
      'Game swap unlimited',
      'Priority support',
      'Free delivery & pickup'
    ],
    includes: [
      'Setup gratis',
      'Panduan penggunaan',
      '24/7 Priority support',
      'Weekly maintenance',
      'Game recommendation',
      'Gaming accessories',
      'Extended warranty'
    ]
  }
];

export default function Pricing() {
  const [selectedConsole, setSelectedConsole] = useState<'PS3' | 'PS4'>('PS4');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Paket <span className="text-primary">Harga</span> Terbaik
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Pilih paket rental yang sesuai dengan kebutuhan gaming Anda. 
            Semakin lama, semakin hemat!
          </p>
        </motion.div>

        {/* Console Type Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-card border-2 border-border rounded-xl p-2 shadow-lg w-full max-w-md">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedConsole('PS4')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  selectedConsole === 'PS4'
                    ? 'bg-primary text-black border-2 border-primary shadow-lg'
                    : 'bg-secondary/90 text-black hover:bg-secondary border-2 border-transparent'
                }`}
              >
                PlayStation 4
              </button>
              <button
                onClick={() => setSelectedConsole('PS3')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  selectedConsole === 'PS3'
                    ? 'bg-primary text-black border-2 border-primary shadow-lg'
                    : 'bg-secondary/90 text-black hover:bg-secondary border-2 border-transparent'
                }`}
              >
                PlayStation 3
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card backdrop-blur-sm border rounded-xl p-6 ps-border ps-pulse transition-all duration-300 ${
                pkg.popular 
                  ? 'border-primary ring-2 ring-primary/20 ps-glow' 
                  : pkg.premium
                  ? 'border-primary-purple ring-2 ring-primary-purple/20 ps-glow'
                  : 'border-border'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 -right-3">
                  <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg border-2 border-black">
                    <Star className="w-4 h-4 mr-1" />
                    <span>POPULER</span>
                  </span>
                </div>
              )}

              {/* Premium Badge */}
              {pkg.premium && (
                <div className="absolute -top-3 -right-3">
                  <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg border-2 border-black">
                    <Crown className="w-4 h-4 mr-1" />
                    <span>PREMIUM</span>
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-black mb-2">{pkg.name}</h3>
                <p className="text-black mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  {pkg.discount > 0 && (
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-black line-through">
                        Rp {(selectedConsole === 'PS4' ? pkg.originalPrice : pkg.originalPrice * 0.6).toLocaleString()}
                      </span>
                      <span className="bg-destructive text-black px-2 py-1 rounded text-xs font-bold">
                        -{pkg.discount}%
                      </span>
                    </div>
                  )}
                  
                  <div className="text-3xl font-bold text-primary">
                    Rp {(selectedConsole === 'PS4' ? pkg.discountedPrice : pkg.discountedPrice * 0.6).toLocaleString()}
                  </div>
                  <div className="text-black text-sm">{pkg.duration}</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-black text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3 rounded-lg font-bold transition-colors shadow-md border-2 ${
                  pkg.popular || pkg.premium
                    ? 'bg-secondary hover:bg-secondary/80 text-black border-border'
                    : 'bg-secondary hover:bg-secondary/80 text-black border-border'
                }`}
              >
                Pilih Paket
              </motion.button>
            </motion.div>
          ))}
        </motion.div>



        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">FAQ Harga</h3>
            <p className="text-black text-lg">Pertanyaan yang sering diajukan tentang harga</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                q: 'Apakah ada biaya tambahan selain harga rental?',
                a: 'Tidak ada biaya tersembunyi. Harga yang tertera sudah termasuk setup gratis dan customer support.'
              },
              {
                q: 'Bagaimana sistem pembayaran?',
                a: 'Pembayaran dapat dilakukan via transfer bank, e-wallet, atau cash. DP 50% saat booking, sisanya saat pengambilan.'
              },
              {
                q: 'Apakah ada denda keterlambatan?',
                a: 'Ya, denda keterlambatan Rp 10.000 per hari setelah masa rental berakhir.'
              },
              {
                q: 'Bisakah mengubah durasi rental di tengah jalan?',
                a: 'Bisa, dengan membayar selisih harga. Perpanjangan minimal 1 hari dengan pemberitahuan H-1.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border-2 border-border rounded-xl p-6 shadow-md"
              >
                <h4 className="text-lg font-bold text-black mb-3">{faq.q}</h4>
                <p className="text-black">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-black mb-4">
              Mulai Gaming Sekarang!
            </h3>
            <p className="text-xl text-black mb-8">
              Pilih paket yang sesuai dan nikmati pengalaman gaming terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/konsol">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-lg font-bold transition-colors border-2 border-primary shadow-md"
                >
                  Lihat Konsol
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary hover:bg-secondary/80 text-black px-8 py-4 rounded-lg font-bold transition-colors border-2 border-border shadow-md"
                >
                  Tanya Harga
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
