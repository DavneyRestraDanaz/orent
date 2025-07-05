'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Star, 
  Shield, 
  Phone,
  ArrowLeft,
  Check,
  Trophy,
  Users,
  X,
  Tag
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Game {
  id: number;
  title: string;
  genre: string;
  rating: number;
  players: string;
  image: string;
  description: string;
  popular?: boolean;
}

interface Console {
  id: number;
  name: string;
  type: 'PS3' | 'PS4';
  variant: string;
  price: string;
  originalPrice?: string;
  image: string;
  specs: string[];
  features: string[];
  available: boolean;
  rating: number;
  reviews: number;
  popular?: boolean;
  games: Game[];
}

const ps4Games: Game[] = [
  {
    id: 1,
    title: 'Spider-Man',
    genre: 'Action Adventure',
    rating: 4.9,
    players: '1 Player',
    image: '/games/spiderman.jpg',
    description: 'Jadilah Spider-Man terbaik dalam game action-adventure yang menakjubkan',
    popular: true
  },
  {
    id: 2,
    title: 'God of War',
    genre: 'Action Adventure',
    rating: 4.9,
    players: '1 Player',
    image: '/games/gow.jpg',
    description: 'Petualangan epik Kratos dan Atreus di dunia mitologi Norse',
    popular: true
  },
  {
    id: 3,
    title: 'The Last of Us Part II',
    genre: 'Action Survival',
    rating: 4.8,
    players: '1 Player',
    image: '/games/tlou2.jpg',
    description: 'Kelanjutan kisah Ellie dalam dunia post-apocalyptic yang brutal',
    popular: true
  },
  {
    id: 4,
    title: 'FIFA 24',
    genre: 'Sports',
    rating: 4.5,
    players: '1-4 Players',
    image: '/games/fifa24.jpg',
    description: 'Simulasi sepak bola terdepan dengan grafik dan gameplay terbaik'
  },
  {
    id: 5,
    title: 'Call of Duty: Modern Warfare',
    genre: 'First Person Shooter',
    rating: 4.7,
    players: '1-4 Players',
    image: '/games/cod-mw.jpg',
    description: 'FPS taktis dengan campaign yang intens dan multiplayer yang seru'
  },
  {
    id: 6,
    title: 'Horizon Zero Dawn',
    genre: 'Action RPG',
    rating: 4.8,
    players: '1 Player',
    image: '/games/horizon.jpg',
    description: 'Jelajahi dunia post-apocalyptic yang dikuasai oleh mesin raksasa'
  },
  {
    id: 7,
    title: 'Grand Theft Auto V',
    genre: 'Action Adventure',
    rating: 4.6,
    players: '1-2 Players',
    image: '/games/gta5.jpg',
    description: 'Open-world crime epic di kota Los Santos yang luas'
  },
  {
    id: 8,
    title: 'Tekken 7',
    genre: 'Fighting',
    rating: 4.4,
    players: '1-2 Players',
    image: '/games/tekken7.jpg',
    description: 'Fighting game 3D terbaik dengan karakter dan combo yang beragam'
  }
];

const ps3Games: Game[] = [
  {
    id: 9,
    title: 'The Last of Us',
    genre: 'Action Survival',
    rating: 4.9,
    players: '1 Player',
    image: '/games/tlou.jpg',
    description: 'Masterpiece survival game yang mengisahkan Joel dan Ellie',
    popular: true
  },
  {
    id: 10,
    title: 'Grand Theft Auto V',
    genre: 'Action Adventure',
    rating: 4.6,
    players: '1-2 Players',
    image: '/games/gta5.jpg',
    description: 'Open-world crime epic di kota Los Santos yang luas'
  },
  {
    id: 11,
    title: 'FIFA 19',
    genre: 'Sports',
    rating: 4.3,
    players: '1-4 Players',
    image: '/games/fifa19.jpg',
    description: 'Simulasi sepak bola dengan Champions League license'
  },
  {
    id: 12,
    title: 'Call of Duty: Black Ops II',
    genre: 'First Person Shooter',
    rating: 4.5,
    players: '1-4 Players',
    image: '/games/cod-bo2.jpg',
    description: 'FPS futuristik dengan zombie mode yang legendaris'
  },
  {
    id: 13,
    title: 'God of War III',
    genre: 'Action Adventure',
    rating: 4.7,
    players: '1 Player',
    image: '/games/gow3.jpg',
    description: 'Klimaks trilogy God of War dengan aksi spektakuler',
    popular: true
  },
  {
    id: 14,
    title: 'Uncharted 3',
    genre: 'Action Adventure',
    rating: 4.6,
    players: '1 Player',
    image: '/games/uncharted3.jpg',
    description: 'Petualangan Nathan Drake di gurun yang mematikan'
  },
  {
    id: 15,
    title: 'Street Fighter IV',
    genre: 'Fighting',
    rating: 4.4,
    players: '1-2 Players',
    image: '/games/sf4.jpg',
    description: 'Fighting game 2D klasik dengan sistem Focus Attack'
  },
  {
    id: 16,
    title: 'Red Dead Redemption',
    genre: 'Action Adventure',
    rating: 4.8,
    players: '1 Player',
    image: '/games/rdr.jpg',
    description: 'Western epic yang mengisahkan John Marston di Wild West'
  }
];

const consoles: Console[] = [
  {
    id: 1,
    name: 'PlayStation 4 Pro',
    type: 'PS4',
    variant: 'Pro',
    price: '50.000',
    originalPrice: '60.000',
    image: '/ps4-pro.jpg',
    specs: ['4K Gaming', '1TB Storage', 'HDR Support', '2x DualShock 4'],
    features: ['4K Gaming', 'HDR', 'Boost Mode', 'Share Play'],
    available: true,
    rating: 4.9,
    reviews: 127,
    popular: true,
    games: ps4Games
  },
  {
    id: 2,
    name: 'PlayStation 4 Slim',
    type: 'PS4',
    variant: 'Slim',
    price: '40.000',
    originalPrice: '45.000',
    image: '/ps4-slim.jpg',
    specs: ['Full HD Gaming', '500GB Storage', '2x DualShock 4', 'USB 3.0'],
    features: ['Full HD Gaming', 'Share Play', 'Remote Play', 'Streaming'],
    available: true,
    rating: 4.7,
    reviews: 89,
    popular: true,
    games: ps4Games
  },
  {
    id: 3,
    name: 'PlayStation 4 Standard',
    type: 'PS4',
    variant: 'Standard',
    price: '35.000',
    image: '/ps4-standard.jpg',
    specs: ['Full HD Gaming', '500GB Storage', '2x DualShock 4', 'Blu-ray'],
    features: ['Full HD Gaming', 'Share Play', 'Multimedia', 'Blu-ray'],
    available: true,
    rating: 4.5,
    reviews: 156,
    games: ps4Games
  },
  {
    id: 4,
    name: 'PlayStation 3 Super Slim',
    type: 'PS3',
    variant: 'Super Slim',
    price: '30.000',
    image: '/ps3-super-slim.jpg',
    specs: ['HD Gaming', '500GB Storage', '2x DualShock 3', 'Blu-ray'],
    features: ['HD Gaming', 'PlayStation Network', 'Multimedia', 'Backwards Compatible'],
    available: false,
    rating: 4.3,
    reviews: 203,
    games: ps3Games
  },
  {
    id: 5,
    name: 'PlayStation 3 Slim',
    type: 'PS3',
    variant: 'Slim',
    price: '25.000',
    image: '/ps3-slim.jpg',
    specs: ['HD Gaming', '320GB Storage', '2x DualShock 3', 'Wi-Fi'],
    features: ['HD Gaming', 'PlayStation Network', 'Media Server', 'Wi-Fi'],
    available: true,
    rating: 4.2,
    reviews: 98,
    games: ps3Games
  },
  {
    id: 6,
    name: 'PlayStation 3 Fat',
    type: 'PS3',
    variant: 'Fat',
    price: '20.000',
    image: '/ps3-fat.jpg',
    specs: ['HD Gaming', '160GB Storage', '2x DualShock 3', 'Card Reader'],
    features: ['HD Gaming', 'PS2 Compatible', 'Linux Support', 'Card Reader'],
    available: true,
    rating: 4.0,
    reviews: 142,
    games: ps3Games
  }
];

export default function Consoles() {
  const [filter, setFilter] = useState<'all' | 'PS3' | 'PS4'>('all');
  const [selectedConsole, setSelectedConsole] = useState<Console | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredConsoles = filter === 'all' 
    ? consoles 
    : consoles.filter(console => console.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {!selectedConsole ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Page Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Pilih <span className="text-primary">Konsol</span> Favoritmu
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tersedia PlayStation 3 dan PlayStation 4 dengan berbagai varian 
                dalam kondisi prima dan harga terjangkau
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-2">
                {['all', 'PS4', 'PS3'].map((filterType) => (
                  <button
                    key={filterType}
                    onClick={() => setFilter(filterType as 'all' | 'PS3' | 'PS4')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      filter === filterType
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {filterType === 'all' ? 'Semua Konsol' : filterType}
                  </button>
                ))}
              </div>
            </div>

            {/* Console Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredConsoles.map((console, index) => (
                <motion.div
                  key={console.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 cursor-pointer relative overflow-hidden hover:bg-card/80 ps-border ps-pulse transition-all duration-300"
                  onClick={() => setSelectedConsole(console)}
                >
                  {/* Popular Badge */}
                  {console.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="popular-badge px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                        ⭐ POPULER
                      </div>
                    </div>
                  )}

                  {/* Console Image */}
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center relative overflow-hidden ps-shimmer border">
                    <Gamepad2 className="w-16 h-16 text-muted-foreground ps-float" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                  </div>

                  {/* Console Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-foreground">{console.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        console.type === 'PS4' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-primary-blue/20 text-primary-blue'
                      }`}>
                        {console.type}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(console.rating)
                                ? 'text-primary-yellow fill-current'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {console.rating} ({console.reviews} review)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        Rp {console.price}/hari
                      </span>
                      {console.originalPrice && (
                        <span className="text-muted-foreground line-through">
                          Rp {console.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Key Specs */}
                    <div className="grid grid-cols-2 gap-2">
                      {console.specs.slice(0, 4).map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Availability & Action */}
                    <div className="flex items-center justify-between pt-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        console.available 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {console.available ? 'Tersedia' : 'Disewa'}
                      </span>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!console.available}
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          console.available 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {console.available ? 'Lihat Detail' : 'Tidak Tersedia'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Console Detail View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedConsole(null)}
              className="flex items-center space-x-2 text-white hover:text-blue-400 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Daftar Konsol</span>
            </button>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Console Image & Gallery */}
              <div>
                <div className="aspect-square bg-gray-800 rounded-xl mb-6 flex items-center justify-center">
                  <Gamepad2 className="w-32 h-32 text-gray-600" />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                      <Gamepad2 className="w-8 h-8 text-gray-600" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Console Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold text-white">{selectedConsole.name}</h1>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      selectedConsole.type === 'PS4' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {selectedConsole.type} {selectedConsole.variant}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedConsole.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300">
                      {selectedConsole.rating} ({selectedConsole.reviews} review)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-4xl font-bold text-blue-400">
                      Rp {selectedConsole.price}/hari
                    </span>
                    {selectedConsole.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">
                        Rp {selectedConsole.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Spesifikasi</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedConsole.specs.map((spec, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Fitur Unggulan</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedConsole.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Games */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Game Tersedia</h3>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {selectedConsole.games.map((game) => (
                      <motion.div
                        key={game.id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer"
                        onClick={() => setSelectedGame(game)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                            <Gamepad2 className="w-8 h-8 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="text-white font-medium">{game.title}</h4>
                              {game.popular && (
                                <span className="px-2 py-1 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 border border-yellow-400/50 text-yellow-300 text-xs rounded-full font-medium">
                                  ⭐ Popular
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm mb-2">{game.description}</p>
                            <div className="flex items-center space-x-4 text-xs">
                              <span className="flex items-center space-x-1 text-blue-400">
                                <Trophy className="w-3 h-3" />
                                <span>{game.genre}</span>
                              </span>
                              <span className="flex items-center space-x-1 text-green-400">
                                <Users className="w-3 h-3" />
                                <span>{game.players}</span>
                              </span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span className="text-gray-300">{game.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    💡 Total {selectedConsole.games.length} game tersedia untuk konsol ini
                  </p>
                </div>

                {/* Rental Options */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Paket Rental</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <span className="text-white font-medium">1 Hari</span>
                        <p className="text-gray-400 text-sm">Rental harian</p>
                      </div>
                      <span className="text-blue-400 font-semibold">Rp {selectedConsole.price}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <span className="text-white font-medium">3 Hari</span>
                        <p className="text-gray-400 text-sm">Diskon 10%</p>
                      </div>
                      <span className="text-blue-400 font-semibold">
                        Rp {(parseInt(selectedConsole.price.replace('.', '')) * 3 * 0.9).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <span className="text-white font-medium">1 Minggu</span>
                        <p className="text-gray-400 text-sm">Diskon 20%</p>
                      </div>
                      <span className="text-blue-400 font-semibold">
                        Rp {(parseInt(selectedConsole.price.replace('.', '')) * 7 * 0.8).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!selectedConsole.available}
                    className={`flex-1 py-4 rounded-xl font-semibold transition-colors ${
                      selectedConsole.available 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {selectedConsole.available ? 'Sewa Sekarang' : 'Tidak Tersedia'}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-4 border border-white/20 rounded-xl text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Additional Info */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Jaminan Kualitas</h4>
                      <p className="text-gray-300 text-sm">
                        Semua konsol telah melalui pengecekan menyeluruh dan dalam kondisi prima. 
                        Garansi penggantian jika ada kerusakan saat rental.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Game Detail Modal */}
      {selectedGame && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGame(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900/95 backdrop-blur-sm border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-white/10">
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-800 rounded-xl flex items-center justify-center">
                  <Gamepad2 className="w-10 h-10 text-gray-400" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h2 className="text-2xl font-bold text-white">{selectedGame.title}</h2>
                    {selectedGame.popular && (
                      <div className="popular-badge px-3 py-1 rounded-full text-white text-sm font-bold shadow-lg">
                        ⭐ POPULER
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{selectedGame.rating}</span>
                    </div>
                    <span className="text-blue-400 flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{selectedGame.genre}</span>
                    </span>
                    <span className="text-green-400 flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{selectedGame.players}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Deskripsi Game</h3>
                <p className="text-gray-300 leading-relaxed">{selectedGame.description}</p>
              </div>

              {/* Game Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Trophy className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Genre</span>
                  </div>
                  <p className="text-gray-300">{selectedGame.genre}</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Pemain</span>
                  </div>
                  <p className="text-gray-300">{selectedGame.players}</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(selectedGame.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300">{selectedGame.rating}/5</span>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Gamepad2 className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Platform</span>
                  </div>
                  <p className="text-gray-300">
                    {selectedConsole?.type} {selectedConsole?.variant}
                  </p>
                </div>
              </div>

              {/* Game Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Fitur Game</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">HD Graphics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Surround Sound</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Achievement System</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Save Game</span>
                  </div>
                  {selectedGame.players !== '1 Player' && (
                    <>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Multiplayer</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Split Screen</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">Tertarik dengan game ini?</h3>
                <p className="text-gray-300 mb-4">
                  Game ini tersedia di konsol <strong>{selectedConsole?.name}</strong> yang bisa kamu sewa!
                </p>
                <button
                  onClick={() => {
                    setSelectedGame(null);
                    // Keep console detail open
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Sewa Konsol Ini
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
