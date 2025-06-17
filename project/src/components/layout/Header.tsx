import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useCart } from '../../contexts/CartContext';
import { Currency } from '../../types';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const { currency, setCurrency, formatPrice } = useCurrency();
  const { getCartCount, getCartTotal } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCurrencyMenu = () => setIsCurrencyMenuOpen(!isCurrencyMenuOpen);
  
  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    setIsCurrencyMenuOpen(false);
  };

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Detect scroll for transparent/solid header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    // { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const currencyOptions: Currency[] = ['USD', 'EUR', 'GBP'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-serif text-xl md:text-2xl font-bold text-burgundy-700">Heritage Bazaar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'text-burgundy-700' 
                    : 'text-gray-700 hover:text-burgundy-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Currency & Cart */}
          <div className="flex items-center space-x-4">
            {/* Currency Selector */}
            <div className="relative">
              <button 
                onClick={toggleCurrencyMenu}
                className="flex items-center text-gray-700 hover:text-burgundy-700 transition-colors"
              >
                <Globe size={18} className="mr-1" />
                <span>{currency}</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isCurrencyMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md py-1 z-50">
                  {currencyOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleCurrencyChange(option)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currency === option ? 'bg-gray-100 text-burgundy-700 font-medium' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <Link 
              to="/cart" 
              className="relative flex items-center text-gray-700 hover:text-burgundy-700 transition-colors"
            >
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-burgundy-700 text-white text-xs rounded-full">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700 hover:text-burgundy-700 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-0 py-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-3 px-2 border-b border-gray-100 ${
                    location.pathname === item.path 
                      ? 'text-burgundy-700' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};