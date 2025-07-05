'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Search, 
  Filter, 
  Star, 
  Trophy, 
  Users,
  Calendar,
  PlayCircle,
  Heart,
  Share2
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Game {
  id: number;
  title: string;
  genre: string[];
  platform: 'PS3' | 'PS4' | 'Both';
  rating: number;
  players: string;
  releaseYear: number;
  image: string;
  popular: boolean;
  exclusive: boolean;
  multiplayer: boolean;
  description: string;
}

const games: Game[] = [
  {
    id: 1,
    title: 'The Last of Us Part II',
    genre: ['Action', 'Adventure', 'Survival Horror'],
    platform: 'PS4',
    rating: 4.8,
    players: '1 Player',
    releaseYear: 2020,
    image: '/tlou2.jpg',
    popular: true,
    exclusive: true,
    multiplayer: false,
    description: 'Sequel dari game survival horror terbaik yang pernah ada.'
  },
  {
    id: 2,
    title: 'God of War (2018)',
    genre: ['Action', 'Adventure'],
    platform: 'PS4',
    rating: 4.9,
    players: '1 Player',
    releaseYear: 2018,
    image: '/gow2018.jpg',
    popular: true,
    exclusive: true,
    multiplayer: false,
    description: 'Petualangan epik Kratos dan Atreus di mitologi Norse.'
  },
  {
    id: 3,
    title: 'FIFA 23',
    genre: ['Sports', 'Football'],
    platform: 'Both',
    rating: 4.2,
    players: '1-4 Players',
    releaseYear: 2022,
    image: '/fifa23.jpg',
    popular: true,
    exclusive: false,
    multiplayer: true,
    description: 'Simulasi sepak bola terbaru dengan gameplay yang realistis.'
  },
  {
    id: 4,
    title: 'Spider-Man: Miles Morales',
    genre: ['Action', 'Adventure', 'Superhero'],
    platform: 'PS4',
    rating: 4.7,
    players: '1 Player',
    releaseYear: 2020,
    image: '/spiderman-miles.jpg',
    popular: true,
    exclusive: true,
    multiplayer: false,
    description: 'Aksi superhero Miles Morales melindungi New York.'
  },
  {
    id: 5,
    title: 'Call of Duty: Modern Warfare',
    genre: ['FPS', 'Action'],
    platform: 'Both',
    rating: 4.3,
    players: '1-4 Players',
    releaseYear: 2019,
    image: '/cod-mw.jpg',
    popular: true,
    exclusive: false,
    multiplayer: true,
    description: 'Game FPS dengan kampanye dan multiplayer yang intens.'
  },
  {
    id: 6,
    title: 'Horizon Zero Dawn',
    genre: ['Action', 'RPG', 'Adventure'],
    platform: 'PS4',
    rating: 4.6,
    players: '1 Player',
    releaseYear: 2017,
    image: '/horizon.jpg',
    popular: true,
    exclusive: true,
    multiplayer: false,
    description: 'Petualangan di dunia post-apocalyptic dengan robot dinosaurus.'
  },
  {
    id: 7,
    title: 'Gran Turismo Sport',
    genre: ['Racing', 'Simulation'],
    platform: 'PS4',
    rating: 4.1,
    players: '1-2 Players',
    releaseYear: 2017,
    image: '/gt-sport.jpg',
    popular: false,
    exclusive: true,
    multiplayer: true,
    description: 'Simulator balap paling realistis untuk PlayStation.'
  },
  {
    id: 8,
    title: 'Uncharted 4',
    genre: ['Action', 'Adventure'],
    platform: 'PS4',
    rating: 4.8,
    players: '1 Player',
    releaseYear: 2016,
    image: '/uncharted4.jpg',
    popular: true,
    exclusive: true,
    multiplayer: false,
    description: 'Petualangan terakhir Nathan Drake mencari harta karun.'
  },
  {
    id: 9,
    title: 'The Last of Us',
    genre: ['Action', 'Survival Horror'],
    platform: 'Both',
    rating: 4.9,
    players: '1 Player',
    releaseYear: 2013,
    image: '/tlou.jpg',
    popular: true,
    exclusive: true,
    multiplayer: false,
    description: 'Masterpiece survival horror di dunia zombie apocalypse.'
  },
  {
    id: 10,
    title: 'GTA V',
    genre: ['Action', 'Adventure', 'Open World'],
    platform: 'Both',
    rating: 4.5,
    players: '1-30 Players',
    releaseYear: 2013,
    image: '/gtav.jpg',
    popular: true,
    exclusive: false,
    multiplayer: true,
    description: 'Game open world terpopuler dengan GTA Online.'
  },
  {
    id: 11,
    title: 'Tekken 7',
    genre: ['Fighting'],
    platform: 'Both',
    rating: 4.4,
    players: '1-2 Players',
    releaseYear: 2017,
    image: '/tekken7.jpg',
    popular: false,
    exclusive: false,
    multiplayer: true,
    description: 'Game fighting 3D dengan karakter dan combo yang beragam.'
  },
  {
    id: 12,
    title: 'Bloodborne',
    genre: ['Action', 'RPG', 'Souls-like'],
    platform: 'PS4',
    rating: 4.7,
    players: '1-3 Players',
    releaseYear: 2015,
    image: '/bloodborne.jpg',
    popular: false,
    exclusive: true,
    multiplayer: true,
    description: 'Action RPG gothic horror yang menantang dari FromSoftware.'
  }
];

const genres = Array.from(new Set(games.flatMap(game => game.genre)));

export default function Games() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<'All' | 'PS3' | 'PS4' | 'Both'>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesGenre = !selectedGenre || game.genre.includes(selectedGenre);
    const matchesPlatform = selectedPlatform === 'All' || game.platform === selectedPlatform;
    
    return matchesSearch && matchesGenre && matchesPlatform;
  });

  const toggleFavorite = (gameId: number) => {
    setFavorites(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };

  const popularGames = games.filter(game => game.popular).slice(0, 6);

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
            Koleksi <span className="text-primary">Game</span> Terlengkap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dari action-adventure hingga multiplayer online, kami menyediakan 
            game terbaru dan klasik untuk PlayStation 3 & 4
          </p>
        </motion.div>

        {/* Popular Games Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Trophy className="w-6 h-6 text-primary-yellow" />
            <h3 className="text-2xl font-bold text-foreground">Game Populer</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-4 cursor-pointer group ps-border hover:translate-y-[-2px] transition-transform"
              >
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <PlayCircle className="w-12 h-12 text-gray-600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Platform Badge */}
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      game.platform === 'PS4' 
                        ? 'bg-primary-blue/80 text-white'
                        : game.platform === 'PS3'
                        ? 'bg-primary-teal/80 text-white'
                        : 'bg-primary/80 text-primary-foreground'
                    }`}>
                      {game.platform}
                    </span>
                  </div>

                  {/* Exclusive Badge */}
                  {game.exclusive && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-primary-yellow/80 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        EXCLUSIVE
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {game.title}
                  </h4>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(game.rating)
                              ? 'text-primary-yellow fill-current'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm">{game.rating}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {game.genre.slice(0, 2).map((genre, genreIndex) => (
                      <span 
                        key={genreIndex}
                        className="bg-card-foreground/10 text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-6 ps-border">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari game..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-input border border-input-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 border border-input-border rounded-lg text-foreground hover:bg-accent transition-colors flex items-center space-x-2 ps-outline"
              >
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 pt-6 border-t border-card-border"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Genre</label>
                    <select
                      value={selectedGenre}
                      onChange={(e) => setSelectedGenre(e.target.value)}
                      className="w-full px-4 py-2 bg-input border border-input-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Semua Genre</option>
                      {genres.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Platform</label>
                    <select
                      value={selectedPlatform}
                      onChange={(e) => setSelectedPlatform(e.target.value as 'All' | 'PS3' | 'PS4' | 'Both')}
                      className="w-full px-4 py-2 bg-input border border-input-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="All">Semua Platform</option>
                      <option value="PS4">PlayStation 4</option>
                      <option value="PS3">PlayStation 3</option>
                      <option value="Both">PS3 & PS4</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Games Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">
              Semua Game ({filteredGames.length})
            </h3>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span className="text-sm">Sortir:</span>
              <select className="bg-input border border-input-border rounded-lg px-3 py-1 text-foreground text-sm focus:outline-none focus:border-primary">
                <option value="popular">Popularitas</option>
                <option value="rating">Rating</option>
                <option value="year">Tahun Rilis</option>
                <option value="name">Nama A-Z</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-4 cursor-pointer group ps-border hover:translate-y-[-2px] transition-transform"
              >
                <div className="aspect-[3/4] bg-card-foreground/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <PlayCircle className="w-16 h-16 text-muted" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                    <button
                      onClick={() => toggleFavorite(game.id)}
                      className={`p-2 rounded-full transition-colors ${
                        favorites.includes(game.id)
                          ? 'bg-primary-red text-white'
                          : 'bg-card-foreground/20 text-white hover:bg-primary-red'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(game.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 bg-card-foreground/20 rounded-full text-white hover:bg-primary-blue transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-2 left-2 space-y-1">
                    <span className={`block px-2 py-1 rounded-full text-xs font-semibold ${
                      game.platform === 'PS4' 
                        ? 'bg-primary-blue/80 text-white'
                        : game.platform === 'PS3'
                        ? 'bg-primary-teal/80 text-white'
                        : 'bg-primary/80 text-primary-foreground'
                    }`}>
                      {game.platform}
                    </span>
                    
                    {game.exclusive && (
                      <span className="block bg-primary-yellow/80 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        EXCLUSIVE
                      </span>
                    )}
                  </div>

                  {/* Multiplayer Icon */}
                  {game.multiplayer && (
                    <div className="absolute top-2 right-2">
                      <Users className="w-5 h-5 text-white/80" />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {game.title}
                  </h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-primary-yellow fill-current" />
                      <span className="text-muted-foreground text-sm">{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{game.releaseYear}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-muted text-sm">
                    <Users className="w-4 h-4" />
                    <span>{game.players}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {game.genre.slice(0, 2).map((genre, genreIndex) => (
                      <span 
                        key={genreIndex}
                        className="bg-card-foreground/10 text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {genre}
                      </span>
                    ))}
                    {game.genre.length > 2 && (
                      <span className="bg-card-foreground/10 text-muted-foreground px-2 py-1 rounded text-xs">
                        +{game.genre.length - 2}
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-2">{game.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <Gamepad2 className="w-16 h-16 text-muted mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">Game Tidak Ditemukan</h4>
              <p className="text-muted-foreground">Coba ubah kata kunci pencarian atau filter yang dipilih</p>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-teal to-primary-blue rounded-2xl p-8 ps-outline">
            <h3 className="text-3xl font-bold text-white mb-4">
              Siap Bermain Game Favoritmu?
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Sewa konsol PlayStation dan nikmati ribuan game berkualitas tinggi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/konsol">
                <motion.button
                  className="bg-white hover:bg-gray-100 text-primary-blue px-8 py-4 rounded-lg font-semibold transition-colors ps-border"
                >
                  Sewa Konsol
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors ps-outline"
                >
                  Hubungi Kami
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
