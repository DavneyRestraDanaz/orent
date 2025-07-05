'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Heart, 
  Users, 
  Clock, 
  Shield, 
  Star,
  Award,
  Target,
  Zap,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Quote,
  ChevronDown
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const stats = [
  { number: '500+', label: 'Pelanggan Puas', icon: Users },
  { number: '3+', label: 'Tahun Pengalaman', icon: Clock },
  { number: '15+', label: 'Konsol Tersedia', icon: Gamepad2 },
  { number: '98%', label: 'Rating Kepuasan', icon: Star },
];

const values = [
  {
    icon: Heart,
    title: 'Passion Gaming',
    description: 'Kami adalah gamers sejati yang memahami kebutuhan dan keinginan sesama gamers.'
  },
  {
    icon: Shield,
    title: 'Kualitas Terjamin',
    description: 'Semua konsol dirawat dengan baik dan selalu dalam kondisi prima untuk pengalaman gaming terbaik.'
  },
  {
    icon: Users,
    title: 'Pelayanan Ramah',
    description: 'Tim kami siap membantu 24/7 dengan pelayanan yang profesional dan ramah.'
  },
  {
    icon: Zap,
    title: 'Proses Cepat',
    description: 'Sistem booking yang mudah dan proses rental yang cepat untuk kepuasan pelanggan.'
  }
];

const team = [
  {
    name: 'Ahmad Rizki',
    role: 'Founder & CEO',
    bio: 'Gamer sejak kecil dengan passion untuk memberikan pengalaman gaming terbaik.',
    icon: Users
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Operations Manager',
    bio: 'Ahli dalam manajemen operasional dan customer service excellence.',
    icon: Shield
  },
  {
    name: 'Budi Santoso',
    role: 'Technical Support',
    bio: 'Teknisi berpengalaman yang memastikan semua konsol dalam kondisi optimal.',
    icon: Gamepad2
  }
];

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: 'rental',
    question: 'Bagaimana cara menyewa PlayStation?',
    answer: 'Anda bisa menghubungi kami melalui WhatsApp, telepon, atau mengisi form di website. Tim kami akan membantu proses rental dari awal hingga selesai.'
  },
  {
    id: 2,
    category: 'rental',
    question: 'Apa saja yang termasuk dalam paket rental?',
    answer: 'Paket rental termasuk konsol PlayStation, 2 controller, kabel HDMI, kabel power, dan minimal 10 game pilihan. Kami juga menyediakan tas khusus untuk membawa konsol.'
  },
  {
    id: 3,
    category: 'rental',
    question: 'Berapa minimal waktu rental?',
    answer: 'Minimal waktu rental adalah 1 hari (24 jam). Kami juga menyediakan paket mingguan dan bulanan dengan harga yang lebih hemat.'
  },
  {
    id: 4,
    category: 'payment',
    question: 'Apa saja metode pembayaran yang diterima?',
    answer: 'Kami menerima pembayaran tunai, transfer bank, e-wallet (OVO, GoPay, Dana), dan kartu kredit/debit.'
  },
  {
    id: 5,
    category: 'delivery',
    question: 'Apakah ada layanan antar jemput?',
    answer: 'Ya, kami menyediakan layanan antar jemput gratis untuk area Bandung dengan minimal rental 3 hari.'
  },
  {
    id: 6,
    category: 'support',
    question: 'Bagaimana jika konsol bermasalah saat rental?',
    answer: 'Kami menyediakan support 24/7. Jika ada masalah teknis, tim kami akan segera mengganti konsol atau memberikan solusi terbaik.'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Ahmad Rizki',
    rating: 5,
    comment: 'Pelayanan sangat memuaskan! PlayStation 4 dalam kondisi sempurna dan game-gamenya lengkap. Pasti akan sewa lagi!',
    date: '2 hari yang lalu'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    rating: 5,
    comment: 'Harga terjangkau dan prosesnya mudah. Controller-nya juga masih bagus banget. Recommended!',
    date: '1 minggu yang lalu'
  },
  {
    id: 3,
    name: 'Budi Santoso',
    rating: 4,
    comment: 'Konsol PlayStation 3 masih berfungsi dengan baik. Koleksi game klasiknya juga banyak. Terima kasih Orent!',
    date: '2 minggu yang lalu'
  }
];

export default function About() {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    console: '',
    date: '',
    duration: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        console: '',
        date: '',
        duration: '',
        message: ''
      });
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-6 pb-16">
        {/* Hero Section with Key Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tentang <span className="text-primary">Orent</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Kami adalah penyedia layanan rental PlayStation terpercaya di Bandung yang 
            berkomitmen memberikan pengalaman gaming terbaik untuk semua kalangan.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6 mb-8">
            <Link href="#story-section">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-card border border-border rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                Cerita Kami
              </motion.button>
            </Link>
            <Link href="#values-section">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-card border border-border rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                Nilai-Nilai
              </motion.button>
            </Link>
            <Link href="#team-section">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-card border border-border rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                Tim Kami
              </motion.button>
            </Link>
            <Link href="#faq-section">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-card border border-border rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                FAQ
              </motion.button>
            </Link>
            <Link href="#contact-section">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-sm"
              >
                Hubungi Kami
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 text-center"
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.div
          id="story-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16 scroll-mt-24"
        >
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Cerita Kami</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Orent lahir dari passion terhadap dunia gaming dan keinginan untuk membuat 
                pengalaman bermain PlayStation menjadi lebih accessible untuk semua orang di Bandung.
              </p>
              <p>
                Dimulai pada tahun 2022, kami melihat bahwa tidak semua orang mampu membeli 
                konsol PlayStation sendiri, namun tetap ingin merasakan keseruan bermain game 
                berkualitas tinggi bersama teman dan keluarga.
              </p>
              <p>
                Dengan motto &ldquo;Gaming for Everyone&rdquo;, kami berkomitmen menyediakan konsol 
                PlayStation dalam kondisi prima dengan harga terjangkau dan pelayanan terbaik.
              </p>
            </div>
          </div>
          
          <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-8 shadow-md">
            <div className="flex items-center justify-center h-64">
              <Gamepad2 className="w-32 h-32 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          id="values-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 scroll-mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Nilai-Nilai Kami</h3>
            <p className="text-muted-foreground text-lg">Prinsip yang menjadi fondasi dalam setiap layanan kami</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Misi Kami</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Menyediakan layanan rental PlayStation berkualitas tinggi dengan harga terjangkau, 
              membangun komunitas gaming yang positif, dan memberikan pengalaman bermain yang 
              tak terlupakan untuk semua kalangan di Bandung.
            </p>
          </div>

          <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-primary-dark" />
              <h3 className="text-2xl font-bold text-foreground">Visi Kami</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi penyedia layanan rental PlayStation terdepan di Indonesia yang dikenal 
              karena kualitas, kepercayaan, dan kontribusi positif terhadap industri gaming lokal.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          id="team-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16 scroll-mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Tim Kami</h3>
            <p className="text-muted-foreground text-lg">Orang-orang hebat di balik Orent</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Mengapa Memilih Orent?</h3>
            <p className="text-muted-foreground text-lg">Keunggulan yang membuat kami berbeda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Konsol selalu dalam kondisi prima',
              'Harga rental yang kompetitif',
              'Proses booking yang mudah dan cepat',
              'Customer service 24/7',
              'Lokasi strategis di Bandung',
              'Garansi penggantian jika ada masalah',
              'Koleksi game terlengkap',
              'Fleksibilitas waktu rental',
              'Layanan antar-jemput (opsional)'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          id="faq-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16 scroll-mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Pertanyaan Umum</h3>
            <p className="text-muted-foreground text-lg">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="bg-card backdrop-blur-sm border border-border rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setSelectedFAQ(selectedFAQ === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/20 transition-colors"
                >
                  <span className="text-foreground font-medium pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      selectedFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {selectedFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          id="contact-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 scroll-mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Hubungi Kami</h3>
            <p className="text-muted-foreground text-lg">Siap membantu Anda 24/7</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Alamat</h4>
                    <p className="text-muted-foreground">Jl. Gaming Center No. 123, Bandung</p>
                  </div>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Telepon</h4>
                    <p className="text-muted-foreground">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@orent.id</p>
                  </div>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">WhatsApp</h4>
                    <p className="text-muted-foreground">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground mb-4">Apa Kata Pelanggan</h4>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-card backdrop-blur-sm border border-border rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <Quote className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-muted-foreground text-sm mb-2">{testimonial.comment}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-medium text-sm">{testimonial.name}</span>
                          <div className="flex items-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-8">
              <h4 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h4>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-foreground mb-2">Pesan Terkirim!</h5>
                  <p className="text-muted-foreground">Terima kasih, kami akan segera menghubungi Anda.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-muted-foreground mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-card/30 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-muted-foreground mb-2">No. Telepon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-card/30 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="08xx-xxxx-xxxx"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-card/30 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-muted-foreground mb-2">Konsol yang Diminati</label>
                      <select
                        name="console"
                        value={formData.console}
                        onChange={handleInputChange}
                        className="w-full bg-card/30 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                        required
                      >
                        <option value="" className="bg-card">Pilih Konsol</option>
                        <option value="ps4-pro" className="bg-card">PlayStation 4 Pro</option>
                        <option value="ps4-slim" className="bg-card">PlayStation 4 Slim</option>
                        <option value="ps4-standard" className="bg-card">PlayStation 4 Standard</option>
                        <option value="ps3-super-slim" className="bg-card">PlayStation 3 Super Slim</option>
                        <option value="ps3-slim" className="bg-card">PlayStation 3 Slim</option>
                        <option value="ps3-fat" className="bg-card">PlayStation 3 Fat</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-muted-foreground mb-2">Durasi Rental</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full bg-card/30 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                        required
                      >
                        <option value="" className="bg-card">Pilih Durasi</option>
                        <option value="1-day" className="bg-card">1 Hari</option>
                        <option value="3-days" className="bg-card">3 Hari</option>
                        <option value="1-week" className="bg-card">1 Minggu</option>
                        <option value="1-month" className="bg-card">1 Bulan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-muted-foreground mb-2">Tanggal Mulai</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-card/30 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-muted-foreground mb-2">Pesan Tambahan</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-card/30 border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Ada permintaan khusus? Tulis di sini..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Kirim Pesan</span>
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="text-center"
        >
          <div className="bg-primary rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Siap Bergabung dengan Komunitas Orent?
            </h3>
            <p className="text-xl text-white mb-8">
              Mulai petualangan gaming Anda bersama kami hari ini!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/konsol">
                <motion.button
                  className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Lihat Konsol
                </motion.button>
              </Link>
              <motion.button
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Hubungi Kami
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
