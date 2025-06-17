import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand/Logo Section */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-2xl font-bold text-white">Heritage Bazaar</h2>
              <p className="text-sm mt-1">Authentic Albanian Antiques</p>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Curating exceptional Albanian antiques with provenance and cultural significance for collectors worldwide.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Furniture" className="text-gray-400 hover:text-white transition-colors">Furniture</Link>
              </li>
              <li>
                <Link to="/shop?category=Silver & Metalwork" className="text-gray-400 hover:text-white transition-colors">Silver & Metalwork</Link>
              </li>
              <li>
                <Link to="/shop?category=Carpets & Textiles" className="text-gray-400 hover:text-white transition-colors">Carpets & Textiles</Link>
              </li>
              <li>
                <Link to="/shop?category=Jewelry & Personal Items" className="text-gray-400 hover:text-white transition-colors">Jewelry & Personal Items</Link>
              </li>
              <li>
                <Link to="/shop?category=Copper & Metalwork" className="text-gray-400 hover:text-white transition-colors">Copper & Metalwork</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-gray-400" />
                <span>123 Antique Lane, Tirana, Albania</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-gray-400" />
                <span>+355 42 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-gray-400" />
                <span>info@heritagebazaar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Heritage Bazaar. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center space-x-4 text-sm">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping</Link>
                </li>
                <li>
                  <Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};