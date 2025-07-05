'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star,
  Check,
  Gift,
  Crown,
  Calculator,
  Info
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

const addOns = [
  {
    name: 'Controller Tambahan',
    price: 15000,
    unit: 'per hari',
    description: 'Perfect untuk gaming 3-4 pemain'
  },
  {
    name: 'Game Premium',
    price: 10000,
    unit: 'per game',
    description: 'Game terbaru dan eksklusif'
  },
  {
    name: 'Delivery Service',
    price: 25000,
    unit: 'per trip',
    description: 'Antar-jemput ke lokasi Anda'
  },
  {
    name: 'Setup Service',
    price: 20000,
    unit: 'per visit',
    description: 'Bantuan setup dan konfigurasi'
  }
];

export default function Pricing() {
  const [selectedConsole, setSelectedConsole] = useState<'PS3' | 'PS4'>('PS4');
  const [calculatorDays, setCalculatorDays] = useState(1);
  const [calculatorAddons, setCalculatorAddons] = useState<string[]>([]);

  const calculatePrice = () => {
    const basePrice = selectedConsole === 'PS4' ? 50000 : 30000;
    let total = basePrice * calculatorDays;
    
    // Apply discounts based on duration
    if (calculatorDays >= 30) {
      total = total * 0.6; // 40% discount
    } else if (calculatorDays >= 7) {
      total = total * 0.7; // 30% discount
    } else if (calculatorDays >= 3) {
      total = total * 0.8; // 20% discount
    }

    // Add addon costs
    calculatorAddons.forEach(addonName => {
      const addon = addOns.find(a => a.name === addonName);
      if (addon) {
        total += addon.price * calculatorDays;
      }
    });

    return Math.round(total);
  };

  const toggleAddon = (addonName: string) => {
    setCalculatorAddons(prev => 
      prev.includes(addonName) 
        ? prev.filter(name => name !== addonName)
        : [...prev, addonName]
    );
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Paket <span className="text-primary">Harga</span> Terbaik
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
          <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-2">
            <button
              onClick={() => setSelectedConsole('PS4')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedConsole === 'PS4'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              PlayStation 4
            </button>
            <button
              onClick={() => setSelectedConsole('PS3')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedConsole === 'PS3'
                  ? 'bg-primary-purple text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              PlayStation 3
            </button>
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
                <div className="absolute -top-3 right-4">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 ps-border">
                    <Star className="w-4 h-4" />
                    <span>POPULER</span>
                  </span>
                </div>
              )}

              {/* Premium Badge */}
              {pkg.premium && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-primary-purple text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 ps-border">
                    <Crown className="w-4 h-4" />
                    <span>PREMIUM</span>
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  {pkg.discount > 0 && (
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-muted-foreground line-through">
                        Rp {(selectedConsole === 'PS4' ? pkg.originalPrice : pkg.originalPrice * 0.6).toLocaleString()}
                      </span>
                      <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-semibold">
                        -{pkg.discount}%
                      </span>
                    </div>
                  )}
                  
                  <div className="text-3xl font-bold text-primary">
                    Rp {(selectedConsole === 'PS4' ? pkg.discountedPrice : pkg.discountedPrice * 0.6).toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">{pkg.duration}</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-teal flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  pkg.popular 
                    ? 'bg-primary-blue hover:bg-primary-blue/90 text-primary-foreground border border-primary-blue/30'
                    : pkg.premium
                    ? 'bg-primary-purple hover:bg-primary-purple/90 text-primary-foreground border border-primary-purple/30'
                    : 'bg-secondary hover:bg-secondary/80 text-foreground border border-border'
                }`}
              >
                Pilih Paket
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Price Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calculator className="w-6 h-6 text-primary-blue" />
              <h3 className="text-2xl font-bold text-foreground">Kalkulator Harga</h3>
            </div>

            <div className="space-y-6">
              {/* Console Selection */}
              <div>
                <label className="block text-foreground font-medium mb-2">Pilih Konsol</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedConsole('PS4')}
                    className={`p-4 rounded-lg border transition-colors ${
                      selectedConsole === 'PS4'
                        ? 'border-primary-blue bg-primary-blue/20'
                        : 'border-border hover:bg-secondary/70'
                    }`}
                  >
                    <div className="text-foreground font-medium">PS4</div>
                    <div className="text-muted-foreground text-sm">Rp 50k/hari</div>
                  </button>
                  <button
                    onClick={() => setSelectedConsole('PS3')}
                    className={`p-4 rounded-lg border transition-colors ${
                      selectedConsole === 'PS3'
                        ? 'border-primary-purple bg-primary-purple/20'
                        : 'border-border hover:bg-secondary/70'
                    }`}
                  >
                    <div className="text-foreground font-medium">PS3</div>
                    <div className="text-muted-foreground text-sm">Rp 30k/hari</div>
                  </button>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-foreground font-medium mb-2">Durasi Rental (hari)</label>
                <input
                  type="number"
                  min="1"
                  max="365"
                  value={calculatorDays}
                  onChange={(e) => setCalculatorDays(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-foreground font-medium mb-2">Add-ons (Opsional)</label>
                <div className="space-y-2">
                  {addOns.map((addon) => (
                    <label key={addon.name} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={calculatorAddons.includes(addon.name)}
                        onChange={() => toggleAddon(addon.name)}
                        className="w-4 h-4 text-primary-blue bg-transparent border-border rounded focus:ring-primary-blue focus:ring-2"
                      />
                      <div className="flex-1">
                        <div className="text-foreground">{addon.name}</div>
                        <div className="text-muted-foreground text-sm">
                          +Rp {addon.price.toLocaleString()} {addon.unit}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Result */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Estimasi Biaya</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-foreground">Konsol {selectedConsole}</span>
                <span className="text-foreground">Rp {((selectedConsole === 'PS4' ? 50000 : 30000) * calculatorDays).toLocaleString()}</span>
              </div>

              {calculatorDays >= 3 && (
                <div className="flex justify-between items-center text-primary-teal">
                  <span>Diskon durasi</span>
                  <span>
                    -{calculatorDays >= 30 ? '40' : calculatorDays >= 7 ? '30' : '20'}%
                  </span>
                </div>
              )}

              {calculatorAddons.map(addonName => {
                const addon = addOns.find(a => a.name === addonName);
                return addon ? (
                  <div key={addonName} className="flex justify-between items-center">
                    <span className="text-foreground">{addon.name}</span>
                    <span className="text-foreground">Rp {(addon.price * calculatorDays).toLocaleString()}</span>
                  </div>
                ) : null;
              })}

              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary-blue">
                    Rp {calculatePrice().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <motion.button
              className="w-full bg-primary-blue hover:bg-primary-blue/90 py-3 rounded-lg text-primary-foreground font-semibold transition-colors border border-primary-blue/30"
            >
              Pesan Sekarang
            </motion.button>

            <div className="mt-4 p-4 bg-primary-blue/10 border border-primary-blue/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                <div className="text-sm text-foreground">
                  Harga sudah termasuk setup gratis dan customer support. 
                  Estimasi ini belum termasuk pajak dan biaya tambahan lainnya.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Layanan Tambahan</h3>
            <p className="text-muted-foreground text-lg">Tingkatkan pengalaman gaming Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{addon.name}</h4>
                <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                <div className="text-xl font-bold text-primary-blue">
                  +Rp {addon.price.toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">{addon.unit}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">FAQ Harga</h3>
            <p className="text-gray-300 text-lg">Pertanyaan yang sering diajukan tentang harga</p>
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{faq.q}</h4>
                <p className="text-gray-300">{faq.a}</p>
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
          <div className="bg-primary rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Mulai Gaming Sekarang!
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Pilih paket yang sesuai dan nikmati pengalaman gaming terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/konsol">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Lihat Konsol
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
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
