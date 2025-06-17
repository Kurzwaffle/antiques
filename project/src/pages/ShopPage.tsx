import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { Product } from '../types';
import { Search, Filter, X } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract unique categories and eras from products
  const categories = Array.from(new Set(products.map(p => p.category)));
  const eras = Array.from(new Set(products.map(p => p.era)));
  
  // Get category from URL if present
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter products based on all criteria
  useEffect(() => {
    let results = [...products];
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        p => p.name.toLowerCase().includes(term) || 
             p.description.toLowerCase().includes(term) ||
             p.shortDescription.toLowerCase().includes(term)
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      results = results.filter(p => p.category === selectedCategory);
    }
    
    // Filter by era
    if (selectedEra) {
      results = results.filter(p => p.era === selectedEra);
    }
    
    // Filter by price range
    results = results.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    
    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, selectedEra, priceRange]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const handlePriceRangeChange = (value: string, index: number) => {
    const newValue = parseInt(value);
    const newPriceRange = [...priceRange] as [number, number];
    newPriceRange[index] = newValue;
    setPriceRange(newPriceRange);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedEra(null);
    setPriceRange([0, 5000]);
    setSearchParams({});
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Our Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of authentic Albanian antiques, each with its own unique history and cultural significance.
          </p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button 
            onClick={toggleMobileFilter}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium"
          >
            <Filter size={18} />
            {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`w-full md:w-64 space-y-6 ${isMobileFilterOpen ? 'block' : 'hidden'} md:block`}>
            {/* Search */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search antiques..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="all-categories" 
                    name="category"
                    checked={selectedCategory === null}
                    onChange={() => handleCategoryChange(null)}
                    className="w-4 h-4 text-burgundy-700 focus:ring-burgundy-500"
                  />
                  <label htmlFor="all-categories" className="ml-2 text-gray-700">All Categories</label>
                </div>
                
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input 
                      type="radio" 
                      id={`category-${category}`} 
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="w-4 h-4 text-burgundy-700 focus:ring-burgundy-500"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-gray-700">{category}</label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Era */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium text-gray-900 mb-3">Era</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="all-eras" 
                    name="era"
                    checked={selectedEra === null}
                    onChange={() => setSelectedEra(null)}
                    className="w-4 h-4 text-burgundy-700 focus:ring-burgundy-500"
                  />
                  <label htmlFor="all-eras" className="ml-2 text-gray-700">All Eras</label>
                </div>
                
                {eras.map((era) => (
                  <div key={era} className="flex items-center">
                    <input 
                      type="radio" 
                      id={`era-${era}`} 
                      name="era"
                      checked={selectedEra === era}
                      onChange={() => setSelectedEra(era)}
                      className="w-4 h-4 text-burgundy-700 focus:ring-burgundy-500"
                    />
                    <label htmlFor={`era-${era}`} className="ml-2 text-gray-700">{era}</label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">Min Price ($)</label>
                  <input 
                    type="number" 
                    id="min-price"
                    min="0"
                    max={priceRange[1]}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(e.target.value, 0)}
                    className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">Max Price ($)</label>
                  <input 
                    type="number" 
                    id="max-price"
                    min={priceRange[0]}
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(e.target.value, 1)}
                    className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            {/* Clear Filters */}
            <button 
              onClick={clearFilters}
              className="flex items-center text-burgundy-700 font-medium hover:text-burgundy-800"
            >
              <X size={16} className="mr-1" />
              Clear All Filters
            </button>
          </aside>
          
          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> items
              </p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-lg text-gray-600 mb-4">No antiques match your current filters.</p>
                <button 
                  onClick={clearFilters}
                  className="text-burgundy-700 font-medium hover:text-burgundy-800"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;