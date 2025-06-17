import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { Button } from '../components/ui/Button';
import { ChevronLeft, ShoppingCart, Heart, Share } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The antique you're looking for doesn't exist or has been sold.</p>
          <Link to="/shop">
            <Button variant="primary">Return to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Breadcrumb */}
      <div className="mb-8">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-burgundy-700 hover:text-burgundy-800 font-medium">
          <ChevronLeft size={16} className="mr-1" />
          Back to results
        </button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-auto object-contain aspect-square"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button 
                  key={index} 
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                    selectedImage === index ? 'border-burgundy-700' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          
          <div className="mb-6">
            <span className="text-2xl font-bold text-burgundy-700">{formatPrice(product.price)}</span>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
          
          {/* Add to Cart */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-24">
                <label htmlFor="quantity" className="block text-sm text-gray-600 mb-1">Quantity</label>
                <input 
                  type="number" 
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex-1">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button className="flex items-center text-gray-700 hover:text-burgundy-700">
                <Heart size={18} className="mr-1" />
                <span className="text-sm">Save</span>
              </button>
              
              <button className="flex items-center text-gray-700 hover:text-burgundy-700">
                <Share size={18} className="mr-1" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg text-gray-900 mb-2">Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Era</p>
                  <p className="font-medium">{product.era}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Origin</p>
                  <p className="font-medium">{product.origin}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Materials</p>
                  <p className="font-medium">{product.materials.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dimensions</p>
                  <p className="font-medium">{product.dimensions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Condition</p>
                  <p className="font-medium">{product.condition}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Sold Out'}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-lg text-gray-900 mb-2">Shipping & Returns</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Each item is carefully packed and insured</li>
                <li>International shipping available to most countries</li>
                <li>Estimated delivery: 7-14 business days</li>
                <li>Returns accepted within 14 days (original condition)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg text-gray-900 mb-2">Authenticity Guarantee</h3>
              <p className="text-gray-700">
                Every antique comes with detailed documentation of provenance and a certificate of authenticity. We stand behind the historical accuracy and condition of all our pieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;