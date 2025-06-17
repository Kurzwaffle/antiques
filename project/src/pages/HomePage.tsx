import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../data/products';
import { FeaturedProduct } from '../components/ui/FeaturedProduct';
import { ProductCard } from '../components/ui/ProductCard';
import { Button } from '../components/ui/Button';
import { ChevronRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const mainFeature = featuredProducts[0];
  const otherFeatures = featuredProducts.slice(1, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen md:h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/6758779/pexels-photo-6758779.jpeg" 
            alt="Albanian antiques"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Heritage Bazaar
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              This hero section showcases the main value proposition of the website, highlighting the unique selling points of Albanian antiques.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button variant="primary" size="lg">
                  Explore Collection
                </Button>
              </Link>
              {/* Our Story button removed */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FeaturedProduct product={mainFeature} />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
              Explore Our Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This section presents different categories of antiques available in the store, allowing users to browse by type.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="Furniture" 
              image="https://images.pexels.com/photos/6758779/pexels-photo-6758779.jpeg"
              description="This card links to the furniture category of antiques"
            />
            <CategoryCard 
              title="Silver & Metalwork" 
              image="https://images.pexels.com/photos/6431304/pexels-photo-6431304.jpeg"
              description="This card links to metal and silver antique items"
            />
            <CategoryCard 
              title="Textiles & Carpets" 
              image="https://images.pexels.com/photos/6480708/pexels-photo-6480708.jpeg"
              description="This card features textile-based antique items"
            />
            <CategoryCard 
              title="Jewelry & Artifacts" 
              image="https://images.pexels.com/photos/6044288/pexels-photo-6044288.jpeg"
              description="This card highlights jewelry and personal artifacts"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                Featured Antiques
              </h2>
              <p className="text-lg text-gray-600">
                This section showcases special items from the collection to drive user interest.
              </p>
            </div>
            <Link to="/shop" className="group inline-flex items-center text-burgundy-700 font-medium hover:text-burgundy-800 transition-colors">
              View All
              <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherFeatures.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section - Commented out as requested */}
      {/* 
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/5766785/pexels-photo-5766785.jpeg" 
                alt="Our workshop" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 pt-6 lg:pt-0">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Our Story & Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                This section introduces the company's background and expertise in Albanian antiques.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This paragraph provides additional context about sourcing methods and authenticity guarantees to build customer trust.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, description }) => {
  return (
    <Link to={`/shop?category=${title}`} className="group block overflow-hidden rounded-lg shadow-md relative h-64">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mb-3">
          {description}
        </p>
        <span className="text-gold-400 text-sm font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
          Browse Collection
          <ChevronRight size={14} className="ml-1" />
        </span>
      </div>
    </Link>
  );
};

export default HomePage;