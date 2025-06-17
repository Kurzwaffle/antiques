import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { Button } from '../components/ui/Button';
import { Minus, Plus, X, ShoppingBag, ArrowRight, ShoppingCart } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, getCartTotal } = useCart();
  const { formatPrice } = useCurrency();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // In a real implementation, this would redirect to the checkout page or process
    setTimeout(() => {
      alert('This is a demo. In a real implementation, you would be redirected to a checkout page.');
      setIsCheckingOut(false);
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingCart size={32} className="text-gray-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any antiques to your cart yet.</p>
          <Link to="/shop">
            <Button variant="primary">
              <ShoppingBag size={18} className="mr-2" />
              Browse Our Collection
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid md:grid-cols-12 bg-gray-50 p-4 text-sm font-medium text-gray-500">
              <div className="md:col-span-6">Product</div>
              <div className="md:col-span-2 text-center">Price</div>
              <div className="md:col-span-2 text-center">Quantity</div>
              <div className="md:col-span-2 text-center">Total</div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item.product.id} className="p-4 md:grid md:grid-cols-12 md:gap-4 md:items-center">
                  {/* Product Info */}
                  <div className="md:col-span-6 flex items-center mb-4 md:mb-0">
                    <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <Link to={`/product/${item.product.id}`} className="font-medium text-gray-900 hover:text-burgundy-700">
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">{item.product.era}</p>
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        className="text-sm text-burgundy-700 hover:text-burgundy-800 flex items-center mt-2 md:hidden"
                      >
                        <X size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="md:col-span-2 text-center">
                    <div className="md:hidden text-sm text-gray-500 mb-1">Price:</div>
                    <span className="font-medium">{formatPrice(item.product.price)}</span>
                  </div>
                  
                  {/* Quantity */}
                  <div className="md:col-span-2 text-center">
                    <div className="md:hidden text-sm text-gray-500 mb-1">Quantity:</div>
                    <div className="flex items-center justify-center">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="mx-2 w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="md:col-span-2 text-center flex md:block items-center justify-between mt-4 md:mt-0">
                    <div className="md:hidden text-sm text-gray-500">Total:</div>
                    <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                    <button 
                      onClick={() => removeItem(item.product.id)}
                      className="text-gray-400 hover:text-burgundy-700 hidden md:inline-block"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Cart Actions */}
            <div className="p-4 bg-gray-50 flex justify-between">
              <button 
                onClick={clearCart}
                className="text-sm text-gray-600 hover:text-burgundy-700 flex items-center"
              >
                <X size={16} className="mr-1" />
                Clear Cart
              </button>
              <Link to="/shop" className="text-sm text-burgundy-700 hover:text-burgundy-800 flex items-center">
                Continue Shopping
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(getCartTotal())}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="font-bold text-gray-900">Estimated Total</span>
                <span className="font-bold text-gray-900">{formatPrice(getCartTotal())}</span>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              size="lg" 
              fullWidth
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
            </Button>
            
            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-2">We Accept</h3>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Secure payment processing by Stripe and PayPal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;