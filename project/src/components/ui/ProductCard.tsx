import React from 'react';
import { Product } from '../../types';
import { useCurrency } from '../../contexts/CurrencyContext';
import { useCart } from '../../contexts/CartContext';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { formatPrice } = useCurrency();
  const { addItem } = useCart();

  return (
    <div className={`group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {product.featured && !featured && (
          <div className="absolute top-2 right-2 bg-gold-500 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-burgundy-700 transition-colors duration-200 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.shortDescription}</p>
        <div className="flex flex-wrap gap-1 mt-2 mb-3">
          <span className="inline-block text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
            {product.era}
          </span>
          <span className="inline-block text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
            {product.origin}
          </span>
        </div>
        
        {/* Fix for the button spacing issue */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-burgundy-700">{formatPrice(product.price)}</p>
          
          {/* Modified button container to be more responsive */}
          <div className="flex items-center space-x-2">
            {/* The Add button is hidden by default and shown on hover */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => addItem(product)}
              className="hidden group-hover:inline-flex items-center transition-opacity duration-300 whitespace-nowrap"
            >
              <ShoppingCart size={14} className="mr-1" />
              Add
            </Button>
            
            {/* View button is always visible */}
            <Link to={`/product/${product.id}`}>
              <Button 
                variant="primary" 
                size="sm"
                className="whitespace-nowrap min-w-[60px] flex justify-center"
              >
                View
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};