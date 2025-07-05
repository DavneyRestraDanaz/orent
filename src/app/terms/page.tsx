'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Clock, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const sections = [
  {
    id: 'general',
    title: 'Ketentuan Umum',
    icon: FileText,
    content: [
      'Layanan rental PlayStation Orent berlaku untuk wilayah Bandung dan sekitarnya.',
      'Penyewa harus berusia minimal 17 tahun atau didampingi oleh orang tua/wali.',
      'Penyewa wajib menunjukkan identitas yang sah (KTP/SIM/Paspor) saat melakukan rental.',
      'Setiap transaksi rental harus disertai dengan kontrak penyewaan yang telah ditandatangani.',
      'Orent berhak menolak layanan kepada penyewa yang melanggar ketentuan.'
    ]
  },
  {
    id: 'rental',
    title: 'Ketentuan Rental',
    icon: Clock,
    content: [
      'Minimal periode rental adalah 1 hari (24 jam) dengan sistem penghitungan per hari.',
      'Pengambilan dan pengembalian konsol dilakukan sesuai dengan jadwal yang telah disepakati.',
      'Keterlambatan pengembalian dikenakan denda Rp 50.000 per hari untuk PS4 dan Rp 30.000 per hari untuk PS3.',
      'Penyewa dapat memperpanjang masa rental dengan memberitahu minimal 2 jam sebelum waktu pengembalian.',
      'Pembatalan rental dapat dilakukan maksimal 4 jam sebelum waktu pengambilan.'
    ]
  },
  {
    id: 'payment',
    title: 'Ketentuan Pembayaran',
    icon: DollarSign,
    content: [
      'Pembayaran dapat dilakukan secara tunai, transfer bank, atau e-wallet.',
      'Deposit wajib dibayar sebesar Rp 500.000 untuk PS4 dan Rp 300.000 untuk PS3.',
      'Deposit akan dikembalikan penuh jika konsol dikembalikan dalam kondisi baik.',
      'Biaya rental dibayar di muka saat pengambilan konsol.',
      'Biaya antar-jemput (jika ada) dibayar bersamaan dengan biaya rental.'
    ]
  },
  {
    id: 'responsibility',
    title: 'Tanggung Jawab Penyewa',
    icon: Shield,
    content: [
      'Penyewa bertanggung jawab penuh atas konsol selama masa rental.',
      'Penyewa wajib menjaga konsol dari kerusakan, kehilangan, atau pencurian.',
      'Dilarang membongkar, memodifikasi, atau memperbaiki konsol tanpa izin.',
      'Penyewa wajib menggunakan konsol sesuai dengan fungsi dan petunjuk penggunaan.',
      'Segala kerusakan yang terjadi menjadi tanggung jawab penyewa dan akan dikenakan biaya perbaikan.'
    ]
  },
  {
    id: 'damages',
    title: 'Kerusakan dan Kehilangan',
    icon: AlertTriangle,
    content: [
      'Kerusakan ringan (goresan kecil) akan dikenakan biaya Rp 50.000 - Rp 100.000.',
      'Kerusakan sedang (controller rusak, port HDMI bermasalah) dikenakan biaya Rp 200.000 - Rp 500.000.',
      'Kerusakan berat atau kehilangan konsol dikenakan biaya penggantian penuh sesuai harga pasar.',
      'Kehilangan aksesoris (controller, kabel) dikenakan biaya sesuai harga satuan.',
      'Penilaian tingkat kerusakan dilakukan oleh teknisi Orent dan bersifat final.'
    ]
  },
  {
    id: 'delivery',
    title: 'Layanan Antar-Jemput',
    icon: CheckCircle,
    content: [
      'Layanan antar-jemput gratis dalam radius 10km dari kantor Orent.',
      'Di luar radius 10km dikenakan biaya tambahan Rp 10.000 per kilometer.',
      'Jadwal antar-jemput: Senin-Minggu pukul 08:00 - 21:00.',
      'Penyewa wajib standby di lokasi saat waktu yang telah disepakati.',
      'Keterlambatan atau tidak adanya penyewa di lokasi dapat dikenakan biaya tambahan.'
    ]
  },
  {
    id: 'prohibited',
    title: 'Hal yang Dilarang',
    icon: XCircle,
    content: [
      'Menggunakan konsol untuk kegiatan komersial tanpa izin tertulis.',
      'Meminjamkan atau menyewakan kembali konsol kepada pihak lain.',
      'Menggunakan konsol di tempat yang berisiko tinggi (pantai, area konstruksi, dll).',
      'Menghubungkan konsol ke internet untuk aktivitas ilegal atau merugikan.',
      'Memasang atau menjalankan software bajakan atau yang merusak sistem.'
    ]
  },
  {
    id: 'force-majeure',
    title: 'Keadaan Kahar (Force Majeure)',
    icon: Info,
    content: [
      'Orent tidak bertanggung jawab atas keterlambatan atau ketidakmampuan memenuhi kewajiban akibat keadaan kahar.',
      'Keadaan kahar meliputi: bencana alam, huru-hara, kebijakan pemerintah, atau kondisi darurat lainnya.',
      'Dalam kondisi force majeure, Orent akan berusaha memberikan solusi terbaik bagi penyewa.',
      'Pengembalian biaya (jika ada) akan diproses setelah kondisi normal kembali.',
      'Komunikasi mengenai force majeure akan disampaikan melalui kontak resmi Orent.'
    ]
  }
];

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Syarat & <span className="text-primary">Ketentuan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Baca dengan teliti syarat dan ketentuan layanan rental PlayStation Orent 
            sebelum melakukan pemesanan
          </p>
        </motion.div>

        {/* Last Updated Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center space-x-3">
            <Info className="w-6 h-6 text-primary" />
            <div>
              <h3 className="text-primary font-semibold">Informasi Penting</h3>
              <p className="text-muted-foreground">
                Syarat dan ketentuan ini berlaku efektif mulai 1 Januari 2025. 
                Dengan menggunakan layanan kami, Anda menyetujui semua ketentuan di bawah ini.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-8 ps-border"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary rounded-lg">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * itemIndex }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Agreement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary/10 border border-primary/30 rounded-xl p-8 mt-12"
        >
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-primary-teal mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Persetujuan</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Dengan melakukan rental atau menggunakan layanan Orent, Anda dianggap telah 
              membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg text-primary-foreground font-semibold transition-colors ps-border"
              >
                Saya Setuju
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-card-border hover:bg-accent px-8 py-3 rounded-lg text-foreground font-semibold transition-colors ps-outline"
              >
                Download PDF
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Contact for Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card backdrop-blur-sm border border-card-border rounded-xl p-8 mt-8 ps-border"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Pertanyaan tentang Syarat & Ketentuan?</h3>
            <p className="text-muted-foreground mb-6">
              Jika Anda memiliki pertanyaan atau memerlukan klarifikasi mengenai syarat dan ketentuan ini, 
              jangan ragu untuk menghubungi tim customer service kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-teal hover:bg-primary-teal/90 px-6 py-3 rounded-lg text-primary-foreground font-semibold transition-colors ps-outline"
              >
                Chat WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-blue hover:bg-primary-blue/90 px-6 py-3 rounded-lg text-primary-foreground font-semibold transition-colors ps-outline"
              >
                Kirim Email
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
