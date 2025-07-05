'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

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

export default function Contact() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Siap melayani Anda 24/7 untuk pengalaman gaming terbaik di Bandung. 
            Jangan ragu untuk menghubungi kami!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-6 ps-border">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">Lokasi</h3>
                    <p className="text-muted-foreground text-sm">Alamat lengkap</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Jl. Dago Raya No. 123<br />
                  Bandung, Jawa Barat 40115<br />
                  Indonesia
                </p>
              </div>

              <div className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-6 ps-border">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-teal rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">Telepon & WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Hubungi langsung</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">+62 812-3456-7890</p>
                  <p className="text-muted-foreground">+62 821-9876-5432</p>
                  <button className="bg-primary-teal hover:bg-primary-teal/90 px-4 py-2 rounded-lg text-white text-sm transition-colors mt-2 ps-outline">
                    Chat WhatsApp
                  </button>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-6 ps-border">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">Email</h3>
                    <p className="text-muted-foreground text-sm">Kirim pesan email</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">info@orent.com</p>
                  <p className="text-muted-foreground">rental@orent.com</p>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-6 ps-border">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">Jam Operasional</h3>
                    <p className="text-muted-foreground text-sm">Waktu layanan</p>
                  </div>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium">Senin - Jumat:</span> 08:00 - 22:00</p>
                  <p><span className="font-medium">Sabtu - Minggu:</span> 09:00 - 23:00</p>
                  <p><span className="font-medium">Hari Libur:</span> 10:00 - 21:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Form */}
            <div className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-8 ps-border">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Kirim Pesan</h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-primary-teal mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">Pesan Terkirim!</h4>
                  <p className="text-muted-foreground">
                    Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda kembali.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-medium mb-2">Nama Lengkap *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-2">Nomor WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="08123456789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-medium mb-2">Konsol yang Diinginkan</label>
                      <select
                        name="console"
                        value={formData.console}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Pilih konsol</option>
                        <option value="ps4-pro">PlayStation 4 Pro</option>
                        <option value="ps4-slim">PlayStation 4 Slim</option>
                        <option value="ps4-standard">PlayStation 4 Standard</option>
                        <option value="ps3-super-slim">PlayStation 3 Super Slim</option>
                        <option value="ps3-slim">PlayStation 3 Slim</option>
                        <option value="ps3-fat">PlayStation 3 Fat</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-2">Durasi Rental</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Pilih durasi</option>
                        <option value="1-day">1 Hari</option>
                        <option value="3-days">3 Hari</option>
                        <option value="1-week">1 Minggu</option>
                        <option value="2-weeks">2 Minggu</option>
                        <option value="1-month">1 Bulan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Tanggal Mulai Rental</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Pesan Tambahan</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 py-4 rounded-lg text-white font-semibold transition-colors flex items-center justify-center space-x-2 ps-border"
                  >
                    <Send className="w-5 h-5" />
                    <span>Kirim Pesan</span>
                  </motion.button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-8 ps-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Lokasi Kami</h3>
              <div className="aspect-video bg-card-foreground/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-muted mx-auto mb-4" />
                  <p className="text-muted-foreground">Peta Lokasi</p>
                  <p className="text-muted text-sm mt-2">
                    Jl. Dago Raya No. 123, Bandung
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Apa Kata Pelanggan Kami?</h3>
            <p className="text-muted-foreground text-lg">Kepuasan pelanggan adalah prioritas utama kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-6 ps-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-primary-yellow fill-current'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">&ldquo;{testimonial.comment}&rdquo;</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-blue to-primary-teal rounded-2xl p-8 ps-outline">
            <h3 className="text-3xl font-bold text-white mb-4">
              Siap untuk Bermain?
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Sewa PlayStation favoritmu sekarang dan nikmati pengalaman gaming terbaik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/konsol">
                <motion.button
                  className="bg-white hover:bg-gray-100 text-primary-blue px-8 py-4 rounded-lg font-semibold transition-colors ps-border"
                >
                  Lihat Konsol
                </motion.button>
              </Link>
              <motion.button
                className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors ps-outline"
              >
                Chat WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
