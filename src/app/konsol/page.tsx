'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Star, 
  ArrowLeft,
  Check,
  Trophy,
  Users
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
    
  const handleBackToConsoles = () => {
    setSelectedConsole(null);
    setSelectedGame(null);
  };
  
  const handleBackToConsoleDetail = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="konsol-container">
        {!selectedConsole ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Page Header */}
            <div className="text-center mb-12 px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Pilih <span className="text-primary">Konsol</span> Favoritmu
              </h2>
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                Tersedia PlayStation 3 dan PlayStation 4 dengan berbagai varian 
                dalam kondisi prima dan harga terjangkau
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center mb-8 px-4">
              <div className="bg-card border border-border rounded-xl p-2 shadow-lg w-full max-w-md">
                <div className="grid grid-cols-3 gap-1">
                  {['all', 'PS4', 'PS3'].map((filterType) => (
                    <button
                      key={filterType}
                      onClick={() => setFilter(filterType as 'all' | 'PS3' | 'PS4')}
                      className={`px-3 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
                        filter === filterType
                          ? 'bg-primary text-white shadow-lg border-2 border-primary'
                          : 'bg-secondary/80 text-foreground hover:bg-secondary border-2 border-transparent hover:border-border'
                      }`}
                    >
                      {filterType === 'all' ? 'Semua' : filterType}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Console Grid */}
            <div className="konsol-grid">
              {filteredConsoles.map((console, index) => (
                <motion.div
                  key={console.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="konsol-card"
                  onClick={() => setSelectedConsole(console)}
                >
                  {/* Popular Badge */}
                  {console.popular && (
                    <div className="konsol-badge">
                      ⭐ POPULER
                    </div>
                  )}

                  {/* Console Image */}
                  <div className="aspect-video bg-secondary/80 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden border-2 border-border">
                    <Gamepad2 className="w-16 h-16 text-primary" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  </div>

                  {/* Console Info */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-foreground overflow-fix">{console.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${
                        console.type === 'PS4' 
                          ? 'bg-primary text-white border-primary' 
                          : 'bg-secondary text-foreground border-border'
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
                                ? 'text-primary fill-current'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-foreground text-sm">
                        {console.rating} ({console.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-xl md:text-2xl font-bold text-foreground text-truncate">
                        Rp {console.price}/hari
                      </span>
                      {console.originalPrice && (
                        <span className="text-primary-dark line-through text-sm">
                          Rp {console.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Key Specs */}
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {console.specs.slice(0, 4).map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Availability & Action */}
                    <div className="flex items-center justify-between pt-4 mt-auto">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold border-2 ${
                        console.available 
                          ? 'bg-green-500 text-white border-green-500' 
                          : 'bg-red-500 text-white border-red-500'
                      }`}>
                        {console.available ? 'Tersedia' : 'Disewa'}
                      </span>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!console.available}
                        className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 border-2 ${
                          console.available 
                            ? 'bg-primary hover:bg-primary/90 text-white border-primary shadow-lg' 
                            : 'bg-muted text-muted-foreground border-muted cursor-not-allowed'
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
        ) : selectedGame ? (
          // Game Detail View
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="konsol-detail-container"
          >
            {/* Back Button */}
            <button
              onClick={handleBackToConsoleDetail}
              className="flex items-center space-x-2 text-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Detail Konsol</span>
            </button>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Game Image */}
              <div>
                <div className="aspect-video bg-secondary/30 rounded-xl mb-6 flex items-center justify-center border border-border">
                  <Gamepad2 className="w-32 h-32 text-primary-dark" />
                </div>
              </div>

              {/* Game Details */}
              <div className="konsol-detail">
                <div className="konsol-detail-header">
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold text-foreground">{selectedGame.title}</h1>
                    {selectedGame.popular && (
                      <span className="konsol-badge" style={{ position: 'relative', top: 0, right: 0 }}>
                        ⭐ Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-foreground mb-4">{selectedGame.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedGame.rating)
                              ? 'text-primary fill-current'
                              : 'text-primary/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-foreground">
                      {selectedGame.rating}/5
                    </span>
                  </div>
                </div>

                {/* Game Info */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Genre</span>
                    </div>
                    <p className="text-foreground">{selectedGame.genre}</p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Pemain</span>
                    </div>
                    <p className="text-foreground">{selectedGame.players}</p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-4 border border-border shadow-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Gamepad2 className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Platform</span>
                    </div>
                    <p className="text-foreground">
                      {selectedConsole?.type} {selectedConsole?.variant}
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors shadow-md"
                  >
                    Sewa Konsol dengan Game Ini
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Console Detail View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="konsol-detail-container"
          >
            {/* Back Button */}
            <button
              onClick={handleBackToConsoles}
              className="flex items-center space-x-2 text-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Daftar Konsol</span>
            </button>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Console Image & Gallery */}
              <div>
                <div className="aspect-square bg-secondary/30 rounded-xl mb-6 flex items-center justify-center border border-border">
                  <Gamepad2 className="w-32 h-32 text-primary-dark" />
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-secondary/30 rounded-lg flex items-center justify-center border border-border">
                      <Gamepad2 className="w-8 h-8 text-primary-dark" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Console Details */}
              <div className="space-y-6 konsol-detail">
                <div className="konsol-detail-header">
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold text-foreground">{selectedConsole.name}</h1>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedConsole.type === 'PS4' 
                        ? 'bg-primary/20 text-primary-darker' 
                        : 'bg-primary-dark/20 text-primary-darker'
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
                              ? 'text-primary fill-current'
                              : 'text-primary/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-foreground">
                      {selectedConsole.rating} ({selectedConsole.reviews} review)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      Rp {selectedConsole.price}/hari
                    </span>
                    {selectedConsole.originalPrice && (
                      <span className="text-xl text-primary-dark line-through">
                        Rp {selectedConsole.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                    selectedConsole.available 
                      ? 'bg-green-500/20 text-green-700' 
                      : 'bg-red-500/20 text-red-700'
                  }`}>
                    {selectedConsole.available ? 'Tersedia untuk disewa' : 'Sedang disewa'}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Spesifikasi</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedConsole.specs.map((spec, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Fitur Unggulan</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedConsole.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Available Games */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Game Tersedia</h3>
              <div className="game-grid">
                {selectedConsole.games.map((game) => (
                  <motion.div
                    key={game.id}
                    whileHover={{ scale: 1.02 }}
                    className="game-card"
                    onClick={() => setSelectedGame(game)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-secondary/30 rounded-lg flex items-center justify-center border border-border">
                        <Gamepad2 className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-foreground font-medium overflow-fix">{game.title}</h4>
                          {game.popular && (
                            <span className="konsol-badge whitespace-nowrap" style={{ position: 'relative', top: 0, right: 0, fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                              ⭐ Popular
                            </span>
                          )}
                        </div>
                        <p className="text-foreground/80 text-sm mb-2 line-clamp-2 overflow-fix">{game.description}</p>
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="flex items-center space-x-1 text-foreground whitespace-nowrap">
                            <Trophy className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-truncate">{game.genre}</span>
                          </span>
                          <span className="flex items-center space-x-1 text-foreground whitespace-nowrap">
                            <Users className="w-3 h-3 text-primary flex-shrink-0" />
                            <span>{game.players}</span>
                          </span>
                          <div className="flex items-center space-x-1 whitespace-nowrap">
                            <Star className="w-3 h-3 text-primary fill-current flex-shrink-0" />
                            <span className="text-foreground">{game.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}
