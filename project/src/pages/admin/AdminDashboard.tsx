import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdmin } from '../../admin/AdminContext';
import { Button } from '../../components/ui/Button';
import { 
  LayoutDashboard, 
  Package, 
  Tag, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X 
} from 'lucide-react';

// Admin dashboard subpages (these would be implemented later)
const Dashboard = () => <div className="p-6"><h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1></div>;
const ProductsList = () => <div className="p-6"><h1 className="text-2xl font-bold mb-6">Products Management</h1></div>;
const CategoriesList = () => <div className="p-6"><h1 className="text-2xl font-bold mb-6">Categories Management</h1></div>;

const AdminDashboard: React.FC = () => {
  const { signOut } = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Close mobile menu when location changes
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };
  
  const navItems = [
    { path: '/admin/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/dashboard/products', icon: <Package size={20} />, label: 'Products' },
    { path: '/admin/dashboard/categories', icon: <Tag size={20} />, label: 'Categories' },
    { path: '/admin/dashboard/settings', icon: <Settings size={20} />, label: 'Settings' }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-xl font-bold text-burgundy-700">Heritage Bazaar</span>
          </Link>
        </div>
        
        <nav className="flex-1 py-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-burgundy-700 ${
                    location.pathname === item.path ? 'bg-gray-100 text-burgundy-700 border-l-4 border-burgundy-700' : ''
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100"
          >
            <LogOut size={20} />
            <span className="ml-3">Sign Out</span>
          </button>
        </div>
      </aside>
      
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 inset-x-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="font-serif font-bold text-burgundy-700">
            Heritage Bazaar Admin
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="h-full w-64 bg-white shadow-lg">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <span className="font-serif font-bold text-burgundy-700">Admin Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            
            <nav className="py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-burgundy-700 ${
                        location.pathname === item.path ? 'bg-gray-100 text-burgundy-700 border-l-4 border-burgundy-700' : ''
                      }`}
                    >
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleSignOut}
                className="flex items-center w-full px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100"
              >
                <LogOut size={20} />
                <span className="ml-3">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64 min-h-screen">
        {/* Top header for larger screens */}
        <header className="hidden md:flex items-center justify-between bg-white p-4 border-b border-gray-200">
          <h1 className="text-xl font-medium">Admin Dashboard</h1>
          <div>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut size={16} className="mr-2" />
              Sign Out
            </Button>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 md:pt-0 pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1></div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;