'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit3, 
  Save, 
  Camera,
  Clock,
  Gamepad2,
  Star,
  Award,
  Settings,
  Lock,
  CreditCard,
  History
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  avatar: string;
  totalRentals: number;
  favoriteConsole: string;
  membershipLevel: string;
  totalSpent: number;
}

interface RentalHistory {
  id: string;
  console: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'active' | 'cancelled';
  total: number;
  rating?: number;
}

const mockUser: UserProfile = {
  id: 'USR001',
  name: 'Ahmad Rizki',
  email: 'ahmad.rizki@email.com',
  phone: '+62 812-3456-7890',
  address: 'Jl. Dago No. 123, Bandung, Jawa Barat',
  joinDate: '2023-03-15',
  avatar: '/avatar-placeholder.jpg',
  totalRentals: 15,
  favoriteConsole: 'PlayStation 4 Pro',
  membershipLevel: 'Gold',
  totalSpent: 1250000
};

const mockRentalHistory: RentalHistory[] = [
  {
    id: 'RNT015',
    console: 'PlayStation 4 Pro',
    startDate: '2025-06-25',
    endDate: '2025-06-27',
    status: 'completed',
    total: 150000,
    rating: 5
  },
  {
    id: 'RNT014',
    console: 'PlayStation 4 Slim',
    startDate: '2025-06-20',
    endDate: '2025-06-22',
    status: 'completed',
    total: 120000,
    rating: 4
  },
  {
    id: 'RNT013',
    console: 'PlayStation 3 Super Slim',
    startDate: '2025-06-15',
    endDate: '2025-06-17',
    status: 'completed',
    total: 90000,
    rating: 5
  }
];

const achievements = [
  { icon: Award, title: 'Early Adopter', description: 'Salah satu pengguna pertama', unlocked: true },
  { icon: Star, title: 'Top Reviewer', description: 'Memberikan review terbaik', unlocked: true },
  { icon: Gamepad2, title: 'Gaming Enthusiast', description: 'Rental lebih dari 10 kali', unlocked: true },
  { icon: Clock, title: 'Loyal Customer', description: 'Member aktif 1 tahun+', unlocked: false }
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(mockUser);

  const handleSave = () => {
    // Simulate saving data
    setIsEditing(false);
    // In real app, this would send data to backend
    console.log('Saving profile data:', formData);
  };

  const getMembershipBadge = (level: string) => {
    const badges = {
      Bronze: 'bg-primary-red/70',
      Silver: 'bg-secondary',
      Gold: 'bg-primary-yellow',
      Platinum: 'bg-primary-teal'
    };
    return badges[level as keyof typeof badges] || 'bg-muted';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      completed: 'text-primary-teal',
      active: 'text-primary-blue',
      cancelled: 'text-primary-red'
    };
    return colors[status as keyof typeof colors] || 'text-muted-foreground';
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'history', label: 'Riwayat', icon: History },
    { id: 'achievements', label: 'Pencapaian', icon: Award },
    { id: 'settings', label: 'Pengaturan', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card backdrop-blur-sm border border-border rounded-xl p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-purple rounded-full flex items-center justify-center shadow-lg">
                <Gamepad2 className="w-16 h-16 text-primary-foreground" />
              </div>
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg">
                <Camera className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">{mockUser.name}</h1>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${getMembershipBadge(mockUser.membershipLevel)}`}>
                  {mockUser.membershipLevel}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{mockUser.email}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{mockUser.totalRentals}</div>
                  <div className="text-sm text-muted-foreground">Total Rental</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-green">Rp {mockUser.totalSpent.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Pengeluaran</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-purple">
                    {new Date().getFullYear() - new Date(mockUser.joinDate).getFullYear() + 1} Tahun
                  </div>
                  <div className="text-sm text-muted-foreground">Member Sejak</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center md:justify-start space-x-1 mb-8"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/50 text-muted-foreground hover:bg-card/70'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card backdrop-blur-sm border border-border rounded-xl p-8"
        >
          {activeTab === 'profile' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Informasi Profil</h2>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg text-primary-foreground transition-colors"
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                  <span>{isEditing ? 'Simpan' : 'Edit'}</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-muted-foreground mb-2">Nama Lengkap</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 px-4 py-3 bg-card/30 rounded-lg">
                        <User className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{formData.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-muted-foreground mb-2">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 px-4 py-3 bg-card/30 rounded-lg">
                        <Mail className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{formData.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-muted-foreground mb-2">Nomor Telepon</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 px-4 py-3 bg-card/30 rounded-lg">
                        <Phone className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{formData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-muted-foreground mb-2">Alamat</label>
                    {isEditing ? (
                      <textarea
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
                      />
                    ) : (
                      <div className="flex items-start space-x-3 px-4 py-3 bg-card/30 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-foreground">{formData.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Riwayat Rental</h2>
              <div className="space-y-4">
                {mockRentalHistory.map((rental) => (
                  <div key={rental.id} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                          <Gamepad2 className="w-6 h-6 text-foreground" />
                        </div>
                        <div>
                          <h3 className="text-foreground font-semibold">{rental.console}</h3>
                          <p className="text-muted-foreground text-sm">ID: {rental.id}</p>
                        </div>
                      </div>
                      
                      <div className="text-center md:text-left">
                        <p className="text-muted-foreground">
                          {new Date(rental.startDate).toLocaleDateString()} - {new Date(rental.endDate).toLocaleDateString()}
                        </p>
                        <p className={`font-semibold ${getStatusColor(rental.status)}`}>
                          {rental.status === 'completed' ? 'Selesai' : 
                           rental.status === 'active' ? 'Aktif' : 'Dibatalkan'}
                        </p>
                      </div>
                      
                      <div className="text-center md:text-right">
                        <p className="text-green-400 font-bold">Rp {rental.total.toLocaleString()}</p>
                        {rental.rating && (
                          <div className="flex items-center justify-center md:justify-end space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < rental.rating! ? 'text-yellow-400 fill-current' : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Pencapaian</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-lg border ${
                        achievement.unlocked
                          ? 'bg-blue-600/20 border-blue-400/30'
                          : 'bg-card/50 border-border'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${
                          achievement.unlocked ? 'bg-blue-600' : 'bg-gray-600'
                        }`}>
                          <Icon className="w-6 h-6 text-foreground" />
                        </div>
                        <div>
                          <h3 className={`font-semibold ${
                            achievement.unlocked ? 'text-blue-400' : 'text-gray-400'
                          }`}>
                            {achievement.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Pengaturan</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Notifikasi</h3>
                    <div className="space-y-3">
                      {[
                        'Email notifications',
                        'SMS notifications',
                        'Push notifications',
                        'Marketing emails'
                      ].map((setting, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                          <span className="text-muted-foreground">{setting}</span>
                          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
                            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Keamanan</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center space-x-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
                        <Lock className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">Ubah Password</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left">
                        <CreditCard className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">Metode Pembayaran</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
