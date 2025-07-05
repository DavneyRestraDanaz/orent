'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Calendar, 
  User, 
  Clock,
  Search,
  Filter,
  ArrowRight,
  Heart,
  Share2,
  Eye,
  MessageCircle
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  comments: number;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Game PlayStation Terbaik 2025 yang Wajib Dimainkan',
    excerpt: 'Daftar game PS4 dan PS5 terbaru yang paling ditunggu di tahun 2025, dari action-adventure hingga RPG epic.',
    content: 'Tahun 2025 menjadi tahun yang menarik untuk para gamers PlayStation...',
    author: 'Admin Orent',
    date: '2025-01-15',
    readTime: '5 min',
    category: 'Gaming',
    tags: ['PS4', 'PS5', 'Game Review', '2025'],
    image: '/blog-games-2025.jpg',
    views: 1250,
    likes: 89,
    comments: 23,
    featured: true
  },
  {
    id: '2',
    title: 'Tips Merawat Controller PlayStation Agar Awet',
    excerpt: 'Panduan lengkap cara merawat DualShock dan DualSense controller agar tetap responsif dan tahan lama.',
    content: 'Controller adalah komponen penting dalam gaming experience...',
    author: 'Tech Team Orent',
    date: '2025-01-10',
    readTime: '4 min',
    category: 'Tips & Tricks',
    tags: ['Controller', 'Maintenance', 'DualShock'],
    image: '/blog-controller-care.jpg',
    views: 892,
    likes: 67,
    comments: 15
  },
  {
    id: '3',
    title: 'Sejarah PlayStation: Dari PS1 hingga PS5',
    excerpt: 'Perjalanan panjang konsol PlayStation dari era 90-an hingga generasi terbaru saat ini.',
    content: 'PlayStation pertama kali diluncurkan oleh Sony pada tahun 1994...',
    author: 'Gaming Historian',
    date: '2025-01-05',
    readTime: '8 min',
    category: 'History',
    tags: ['PlayStation', 'History', 'Sony', 'Console'],
    image: '/blog-ps-history.jpg',
    views: 1540,
    likes: 156,
    comments: 42
  },
  {
    id: '4',
    title: 'Panduan Setup PlayStation untuk Pemula',
    excerpt: 'Langkah-langkah mudah setting up PlayStation untuk pertama kali, dari unboxing hingga siap dimainkan.',
    content: 'Bagi yang baru pertama kali menggunakan PlayStation...',
    author: 'Support Team',
    date: '2024-12-28',
    readTime: '6 min',
    category: 'Tutorial',
    tags: ['Setup', 'Beginner', 'PlayStation', 'Guide'],
    image: '/blog-setup-guide.jpg',
    views: 743,
    likes: 52,
    comments: 18
  },
  {
    id: '5',
    title: 'Game Multiplayer Terbaik untuk Dimainkan Bersama',
    excerpt: 'Rekomendasi game co-op dan multiplayer yang seru untuk dimainkan bersama teman dan keluarga.',
    content: 'Gaming bersama teman adalah salah satu pengalaman terbaik...',
    author: 'Community Manager',
    date: '2024-12-20',
    readTime: '7 min',
    category: 'Gaming',
    tags: ['Multiplayer', 'Co-op', 'Party Games', 'Social'],
    image: '/blog-multiplayer.jpg',
    views: 1105,
    likes: 98,
    comments: 31
  },
  {
    id: '6',
    title: 'Evolusi Grafis Game PlayStation Sepanjang Masa',
    excerpt: 'Melihat perkembangan kualitas grafis game dari generasi ke generasi konsol PlayStation.',
    content: 'Perkembangan teknologi grafis dalam dunia gaming...',
    author: 'Tech Reviewer',
    date: '2024-12-15',
    readTime: '9 min',
    category: 'Technology',
    tags: ['Graphics', 'Technology', 'Evolution', 'Visual'],
    image: '/blog-graphics-evolution.jpg',
    views: 987,
    likes: 134,
    comments: 28
  }
];

const categories = ['All', 'Gaming', 'Tips & Tricks', 'History', 'Tutorial', 'Technology'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card/80 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Gamepad2 className="w-8 h-8 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Orent</h1>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                <Link href="/konsol" className="text-foreground hover:text-primary transition-colors">Konsol</Link>
                <Link href="/game" className="text-foreground hover:text-primary transition-colors">Game</Link>
                <Link href="/blog" className="text-primary font-semibold">Blog</Link>
                <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Kontak</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center space-x-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Kembali ke Blog</span>
          </button>

          <article className="max-w-4xl mx-auto">
            <div className="bg-card backdrop-blur-sm border border-border rounded-xl overflow-hidden">
              {/* Article Header */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Gamepad2 className="w-24 h-24 text-muted-foreground" />
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString('id-ID')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{selectedPost.author}</div>
                      <div className="text-gray-400 text-sm">Author</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{selectedPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{selectedPost.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{selectedPost.comments}</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    {selectedPost.excerpt}
                  </p>
                  
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                      sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">Poin Penting</h3>
                    
                    <ul className="space-y-2">
                      <li>• Point pertama yang penting untuk diketahui</li>
                      <li>• Point kedua dengan penjelasan detail</li>
                      <li>• Point ketiga sebagai kesimpulan</li>
                    </ul>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10">
                  {selectedPost.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Social Actions */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>Like ({selectedPost.likes})</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                  
                  <div className="text-gray-400 text-sm">
                    {selectedPost.views} views
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

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
            Blog <span className="text-primary">Gaming</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tips, trik, review, dan berita terbaru seputar dunia PlayStation dan gaming
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Featured Posts</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className="bg-card backdrop-blur-sm border border-border rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Gamepad2 className="w-16 h-16 text-muted-foreground" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('id-ID')}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                        <span>{post.readTime}</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card backdrop-blur-sm border border-border rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Gamepad2 className="w-12 h-12 text-muted-foreground" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('id-ID')}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-foreground mb-3 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <span>{post.readTime}</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Artikel Tidak Ditemukan</h4>
                <p className="text-gray-400">Coba ubah kata kunci pencarian atau kategori</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Artikel Terbaru</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div 
                      key={post.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedPost(post)}
                    >
                      <h4 className="text-white group-hover:text-blue-400 transition-colors text-sm font-medium mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-gray-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('id-ID')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Kategori</h3>
                <div className="space-y-2">
                  {categories.filter(cat => cat !== 'All').map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Tag Populer</h3>
                <div className="flex flex-wrap gap-2">
                  {['PlayStation', 'Gaming', 'PS4', 'PS5', 'Tips', 'Review', 'Tutorial', 'Controller'].map((tag) => (
                    <span 
                      key={tag}
                      className="bg-white/10 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
