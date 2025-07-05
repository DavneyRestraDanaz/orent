'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
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
    image: '/ps4-pro.jpg',
    specs: ['4K Gaming', '1TB Storage', '2 Controllers'],
    available: true
  },
  {
    id: 2,
    name: 'PlayStation 4 Slim',
    price: '40.000',
    image: '/ps4-slim.jpg',
    specs: ['Full HD Gaming', '500GB Storage', '2 Controllers'],
    available: true
  },
  {
    id: 3,
    name: 'PlayStation 3 Super Slim',
    price: '30.000',
    image: '/ps3-slim.jpg',
    specs: ['HD Gaming', '500GB Storage', '2 Controllers'],
    available: false
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
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Sewa <span className="text-primary-blue">PlayStation</span> 
                <br />di Bandung
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nikmati pengalaman gaming terbaik dengan PlayStation 3 & 4 
                berkualitas tinggi. Harga terjangkau, pelayanan terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-primary/60 relative hover:bg-primary/90"
                >
                  Sewa Sekarang
                </motion.button>
                <motion.button
                  className="border border-border/50 hover:bg-accent/50 px-8 py-4 rounded-lg text-foreground font-semibold transition-colors"
                >
                  Lihat Konsol
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-primary/10 rounded-3xl p-8 backdrop-blur-sm border border-border">
                <div className="w-full h-64 flex items-center justify-center">
                  <Gamepad2 className="w-32 h-32 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-foreground mb-4">Mengapa Pilih Orent?</h3>
            <p className="text-muted-foreground text-lg">Kami berkomitmen memberikan pengalaman gaming terbaik</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-card hover:border-primary/60 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Console Selection */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-foreground mb-4">Pilih Konsol Favoritmu</h3>
            <p className="text-muted-foreground text-lg">Tersedia PlayStation 3 dan PlayStation 4 dengan kondisi prima</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {consoles.map((console, index) => (
              <motion.div
                key={console.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card/80 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all hover:bg-card ${
                  selectedConsole === index ? 'border-primary border-2' : 'border-border'
                }`}
                onClick={() => setSelectedConsole(index)}
              >
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Gamepad2 className="w-16 h-16 text-muted-foreground" />
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-2">{console.name}</h4>
                <p className="text-2xl font-bold text-primary mb-4">Rp {console.price}/hari</p>
                
                <ul className="space-y-2 mb-4">
                  {console.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    console.available 
                      ? 'bg-primary-teal/20 text-primary-teal' 
                      : 'bg-primary-red/20 text-primary-red'
                  }`}>
                    {console.available ? 'Tersedia' : 'Disewa'}
                  </span>
                  
                  <motion.button
                    disabled={!console.available}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      console.available 
                        ? 'bg-primary text-primary-foreground hover:opacity-90 ps-border relative' 
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {console.available ? 'Sewa' : 'Tidak Tersedia'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-foreground mb-6">Hubungi Kami</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Siap melayani Anda 24/7 untuk pengalaman gaming terbaik di Bandung
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Bandung, Jawa Barat</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-foreground">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-foreground">info@orent.com</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card backdrop-blur-sm border border-border rounded-xl p-8"
            >
              <h4 className="text-2xl font-semibold text-foreground mb-6">Reservasi Cepat</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Nomor WhatsApp"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <select className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                  <option value="">Pilih Konsol</option>
                  <option value="ps4-pro">PlayStation 4 Pro</option>
                  <option value="ps4-slim">PlayStation 4 Slim</option>
                  <option value="ps3-slim">PlayStation 3 Super Slim</option>
                </select>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <motion.button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 py-3 rounded-lg text-primary-foreground font-semibold transition-all duration-300 border border-primary/30"
                >
                  Kirim Reservasi
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
