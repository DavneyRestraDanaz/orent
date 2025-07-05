'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Users,
  Trophy,
  Shield
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const consoles = [
  {
    id: 1,
    name: 'PlayStation 4 Pro',
    price: '50.000',
    image: '/ps4 pro_HD.png',
    specs: ['4K Gaming', '1TB Storage', 'HDR Support', '2 Controllers'],
    description: 'Nikmati gaming dengan resolusi 4K dan performa tinggi untuk game-game terbaru PlayStation.',
    available: true
  },
  {
    id: 2,
    name: 'PlayStation 4 Slim',
    price: '40.000',
    image: '/ps4 slim_HD.png',
    specs: ['Full HD Gaming', '500GB Storage', '2 Controllers', 'Compact Design'],
    description: 'Desain lebih compact dengan pengalaman gaming PlayStation 4 yang tetap optimal.',
    available: true
  },
  {
    id: 3,
    name: 'PlayStation 3 Super Slim',
    price: '30.000',
    image: '/ps3 slim_HD.png',
    specs: ['HD Gaming', '500GB Storage', '2 Controllers', 'Backward Compatible'],
    description: 'Koleksi game klasik PlayStation dengan desain super slim yang hemat tempat.',
    available: true
  }
];

const features = [
  {
    icon: Clock,
    title: 'Rental Fleksibel',
    description: 'Sewa per hari, per minggu, atau per bulan sesuai kebutuhan'
  },
  {
    icon: Shield,
    title: 'Konsol Terawat',
    description: 'Semua konsol dalam kondisi prima dan selalu dibersihkan'
  },
  {
    icon: Users,
    title: 'Multiplayer Ready',
    description: 'Tersedia 2-4 controller untuk pengalaman gaming bareng'
  },
  {
    icon: Trophy,
    title: 'Game Terlengkap',
    description: 'Koleksi game terbaru dan klasik untuk semua genre'
  }
];

export default function Home() {
  const [selectedConsole, setSelectedConsole] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Sewa <span className="text-primary">PlayStation</span> 
                <br />di Bandung
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nikmati pengalaman gaming terbaik dengan PlayStation 4 & 3 
                berkualitas tinggi. Harga terjangkau, pelayanan terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-primary hover:bg-primary/90 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Mulai Sewa Sekarang
                </motion.button>
                <motion.button
                  className="border border-border hover:border-primary hover:bg-secondary/80 px-8 py-4 rounded-lg text-foreground font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Lihat Konsol
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card/30 rounded-3xl p-8 backdrop-blur-sm border border-border overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image 
                  src="/Orent logo_HD.png" 
                  alt="Orent Station - Sewa PlayStation Bandung" 
                  width={400}
                  height={300}
                  className="w-full h-auto transform group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-foreground mb-4">Mengapa Pilih Orent?</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Kami berkomitmen memberikan pengalaman gaming terbaik dengan layanan berkualitas dan konsol terawat</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Console Selection */}
      <section className="py-20" id="konsol">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-foreground mb-4">Pilih Konsol Favoritmu</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tersedia PlayStation 4 dan PlayStation 3 dengan kondisi prima dan berbagai game terbaru
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {consoles.map((console, index) => {
              // Different background styles for each console to make them visually distinct
              const cardStyles = [
                'bg-gradient-to-br from-card to-card/80 border-2', // PS4 Pro - solid with gradient
                'bg-card/90 backdrop-blur-sm border-2', // PS4 Slim - semi-transparent
                'bg-secondary/30 backdrop-blur-md border-2' // PS3 - different background
              ];
              
              return (
                <motion.div
                  key={console.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${cardStyles[index]} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group ${
                    selectedConsole === index ? 'border-primary shadow-lg' : 'border-border hover:border-primary/60'
                  }`}
                  onClick={() => setSelectedConsole(index)}
                >
                <div className="aspect-video bg-secondary/50 flex items-center justify-center p-6 relative overflow-hidden">
                  <Image 
                    src={console.image} 
                    alt={console.name}
                    width={280}
                    height={200}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{console.name}</h4>
                  <p className="text-2xl font-bold text-primary mb-3">Rp {console.price}/hari</p>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{console.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {console.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mt-5">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      console.available 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'bg-destructive/20 text-destructive border border-destructive/30'
                    }`}>
                      {console.available ? 'Tersedia' : 'Disewa'}
                    </span>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={!console.available}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 border-2 ${
                        console.available 
                          ? 'bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark shadow-md hover:shadow-lg' 
                          : 'bg-muted text-muted-foreground border-muted cursor-not-allowed'
                      }`}
                    >
                      {console.available ? 'Sewa' : 'Tidak Tersedia'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-foreground mb-6">Hubungi Kami</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Siap melayani Anda 24/7 untuk pengalaman gaming terbaik di Bandung
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Lokasi</h4>
                <p className="text-muted-foreground">Bandung, Jawa Barat</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h4>
                <p className="text-muted-foreground">+62 812-3456-7890</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground">info@orent.com</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
