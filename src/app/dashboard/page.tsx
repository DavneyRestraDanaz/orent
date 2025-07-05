'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Calendar, 
  DollarSign, 
  Gamepad2, 
  Users, 
  Clock,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Download,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Rental {
  id: string;
  customerName: string;
  phone: string;
  console: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'overdue';
  totalPrice: number;
}

interface Console {
  id: string;
  name: string;
  type: 'PS3' | 'PS4';
  condition: 'Excellent' | 'Good' | 'Fair';
  status: 'available' | 'rented' | 'maintenance';
  dailyPrice: number;
}

const mockRentals: Rental[] = [
  {
    id: 'RNT001',
    customerName: 'Ahmad Rizki',
    phone: '081234567890',
    console: 'PlayStation 4 Pro',
    startDate: '2025-06-28',
    endDate: '2025-07-02',
    status: 'active',
    totalPrice: 200000
  },
  {
    id: 'RNT002',
    customerName: 'Siti Nurhaliza',
    phone: '081987654321',
    console: 'PlayStation 4 Slim',
    startDate: '2025-06-25',
    endDate: '2025-06-30',
    status: 'overdue',
    totalPrice: 200000
  },
  {
    id: 'RNT003',
    customerName: 'Budi Santoso',
    phone: '081122334455',
    console: 'PlayStation 3 Super Slim',
    startDate: '2025-06-20',
    endDate: '2025-06-25',
    status: 'completed',
    totalPrice: 150000
  }
];

const mockConsoles: Console[] = [
  {
    id: 'PS4001',
    name: 'PlayStation 4 Pro #1',
    type: 'PS4',
    condition: 'Excellent',
    status: 'rented',
    dailyPrice: 50000
  },
  {
    id: 'PS4002',
    name: 'PlayStation 4 Slim #1',
    type: 'PS4',
    condition: 'Good',
    status: 'available',
    dailyPrice: 40000
  },
  {
    id: 'PS3001',
    name: 'PlayStation 3 Super Slim #1',
    type: 'PS3',
    condition: 'Good',
    status: 'maintenance',
    dailyPrice: 30000
  }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [rentals] = useState<Rental[]>(mockRentals);
  const [consoles] = useState<Console[]>(mockConsoles);

  const stats = {
    totalRevenue: 1250000,
    activeRentals: rentals.filter(r => r.status === 'active').length,
    totalConsoles: consoles.length,
    availableConsoles: consoles.filter(c => c.status === 'available').length
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'completed': return 'bg-primary-blue/20 text-primary-blue';
      case 'overdue': return 'bg-primary-red/20 text-primary-red';
      case 'available': return 'bg-primary-teal/20 text-primary-teal';
      case 'rented': return 'bg-primary-yellow/20 text-primary-yellow';
      case 'maintenance': return 'bg-primary-red/20 text-primary-red';
      default: return 'bg-muted/50 text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Orent Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Back to Site
              </Link>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6">
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'rentals', label: 'Rental', icon: Calendar },
                  { id: 'consoles', label: 'Konsol', icon: Gamepad2 },
                  { id: 'customers', label: 'Pelanggan', icon: Users },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Total Revenue</p>
                        <p className="text-2xl font-bold text-foreground">
                          Rp {stats.totalRevenue.toLocaleString()}
                        </p>
                      </div>
                      <DollarSign className="w-8 h-8 text-primary-teal" />
                    </div>
                    <div className="flex items-center mt-4 text-primary-teal text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +12% dari bulan lalu
                    </div>
                  </div>

                  <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Rental Aktif</p>
                        <p className="text-2xl font-bold text-foreground">{stats.activeRentals}</p>
                      </div>
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex items-center mt-4 text-primary text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      2 berakhir hari ini
                    </div>
                  </div>

                  <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Total Konsol</p>
                        <p className="text-2xl font-bold text-foreground">{stats.totalConsoles}</p>
                      </div>
                      <Gamepad2 className="w-8 h-8 text-primary-blue" />
                    </div>
                    <div className="flex items-center mt-4 text-primary-teal text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {stats.availableConsoles} tersedia
                    </div>
                  </div>

                  <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">Pelanggan</p>
                        <p className="text-2xl font-bold text-foreground">47</p>
                      </div>
                      <Users className="w-8 h-8 text-primary-yellow" />
                    </div>
                    <div className="flex items-center mt-4 text-primary-teal text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      5 pelanggan baru
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Aktivitas Terbaru</h3>
                  <div className="space-y-4">
                    {rentals.slice(0, 5).map((rental) => (
                      <div key={rental.id} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">{rental.customerName}</p>
                            <p className="text-muted-foreground text-sm">Rental {rental.console}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-foreground font-medium">Rp {rental.totalPrice.toLocaleString()}</p>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(rental.status)}`}>
                            {rental.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'rentals' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">Manajemen Rental</h2>
                  <button className="bg-primary-blue hover:bg-primary-blue/90 px-4 py-2 rounded-lg text-primary-foreground flex items-center space-x-2 border border-primary-blue/30">
                    <Plus className="w-4 h-4" />
                    <span>Tambah Rental</span>
                  </button>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Cari rental..."
                          className="pl-10 pr-4 py-2 bg-secondary/30 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                        />
                      </div>
                      <button className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-secondary/50 flex items-center space-x-2">
                        <Filter className="w-4 h-4" />
                        <span>Filter</span>
                      </button>
                    </div>
                    <button className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-secondary/50 flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Export</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">ID</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Pelanggan</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Konsol</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Tanggal</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Total</th>
                          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rentals.map((rental) => (
                          <tr key={rental.id} className="border-b border-border/50">
                            <td className="py-4 px-4 text-foreground font-mono">{rental.id}</td>
                            <td className="py-4 px-4">
                              <div>
                                <p className="text-foreground font-medium">{rental.customerName}</p>
                                <p className="text-muted-foreground text-sm">{rental.phone}</p>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-white">{rental.console}</td>
                            <td className="py-4 px-4">
                              <div>
                                <p className="text-white">{rental.startDate}</p>
                                <p className="text-gray-400 text-sm">s/d {rental.endDate}</p>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(rental.status)}`}>
                                {rental.status}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-white font-medium">
                              Rp {rental.totalPrice.toLocaleString()}
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center space-x-2">
                                <button className="p-2 hover:bg-secondary/70 rounded-lg">
                                  <Eye className="w-4 h-4 text-primary-blue" />
                                </button>
                                <button className="p-2 hover:bg-secondary/70 rounded-lg">
                                  <Edit className="w-4 h-4 text-primary-teal" />
                                </button>
                                <button className="p-2 hover:bg-secondary/70 rounded-lg">
                                  <Trash2 className="w-4 h-4 text-red-400" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'consoles' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Manajemen Konsol</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Tambah Konsol</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {consoles.map((console) => (
                    <div key={console.id} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-foreground">{console.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(console.status)}`}>
                          {console.status}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Tipe:</span>
                          <span className="text-white">{console.type}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Kondisi:</span>
                          <span className="text-white">{console.condition}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Harga/hari:</span>
                          <span className="text-white font-medium">Rp {console.dailyPrice.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mt-6">
                        <button className="flex-1 bg-primary-blue hover:bg-primary-blue/90 py-2 rounded-lg text-primary-foreground text-sm border border-primary-blue/30">
                          Edit
                        </button>
                        <button className="px-3 py-2 border border-border rounded-lg text-foreground hover:bg-secondary/70">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="px-3 py-2 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/10">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'customers' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Data Pelanggan</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Tambah Pelanggan</span>
                  </button>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Data Pelanggan</h3>
                    <p className="text-gray-400">Fitur manajemen pelanggan akan segera tersedia</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
