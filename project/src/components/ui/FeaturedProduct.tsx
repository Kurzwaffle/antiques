import React from 'react';
import { Product } from '../../types';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useCart } from '../../contexts/CartContext';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface FeaturedProductProps {
  product: Product;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  const { formatPrice } = useCurrency();
  const { addItem } = useCart();

  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-100">
      <div className="md:flex">
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-l" />
        </div>
        
        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center relative z-10">
          <div className="md:max-w-xl">
            <span className="inline-block text-sm font-semibold bg-gold-500 text-gray-900 px-3 py-1 rounded-full mb-4">
              Featured Antique
            </span>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">
              {product.name}
            </h2>
            
            <p className="text-base md:text-lg text-gray-700 mb-6">
              {product.shortDescription}
            </p>
            
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Era:</span>
                  <p className="font-medium text-gray-900">{product.era}</p>
                </div>
                <div>
                  <span className="text-gray-500">Origin:</span>
                  <p className="font-medium text-gray-900">{product.origin}</p>
                </div>
                <div>
                  <span className="text-gray-500">Materials:</span>
                  <p className="font-medium text-gray-900">{product.materials.join(', ')}</p>
                </div>
                <div>
                  <span className="text-gray-500">Condition:</span>
                  <p className="font-medium text-gray-900">{product.condition}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-burgundy-700">
                {formatPrice(product.price)}
              </span>
              <Button 
                variant="primary" 
                onClick={() => addItem(product)}
              >
                Add to Cart
              </Button>
            </div>
            
            <Link to={`/product/${product.id}`} className="group inline-flex items-center text-burgundy-700 font-medium hover:text-burgundy-800 transition-colors">
              View Details
              <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};