import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { CartProvider } from './contexts/CartContext';
import { AdminProvider } from './contexts/AdminContext';
import { Layout } from './components/layout/Layout';
import { AdminRoutes } from './admin/AdminRoutes';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import CartPage from './pages/CartPage';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Admin = React.lazy(() => import('./pages/Admin'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <AdminProvider>
          <Router>
            <Routes>
              {/* Admin routes */}
              <Route path="/admin/*" element={<AdminRoutes />} />
              
              {/* Public routes */}
              <Route path="/" element={
                <Layout>
                  <HomePage />
                </Layout>
              } />
              <Route path="/shop" element={
                <Layout>
                  <ShopPage />
                </Layout>
              } />
              <Route path="/product/:id" element={
                <Layout>
                  <ProductDetailPage />
                </Layout>
              } />
              <Route path="/about" element={
                <Layout>
                  <AboutPage />
                </Layout>
              } />
              <Route path="/contact" element={
                <Layout>
                  <ContactPage />
                </Layout>
              } />
              <Route path="/faq" element={
                <Layout>
                  <FaqPage />
                </Layout>
              } />
              <Route path="/cart" element={
                <Layout>
                  <CartPage />
                </Layout>
              } />
            </Routes>
          </Router>
        </AdminProvider>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;