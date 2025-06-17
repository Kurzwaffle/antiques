import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Product } from '../types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select(`
            *,
            categories(*),
            product_images(*),
            product_materials(*)
          `)
          .order('created_at', { ascending: false });
          
        if (productsError) throw productsError;
        
        // Transform the data to match our Product type
        const transformedProducts: Product[] = productsData.map((item) => {
          // Extract images from product_images
          const images = item.product_images
            .sort((a: any, b: any) => a.display_order - b.display_order)
            .map((img: any) => img.image_url);
          
          // Extract materials from product_materials
          const materials = item.product_materials.map((mat: any) => mat.material_name);
          
          return {
            id: item.id,
            name: item.name,
            shortDescription: item.short_description,
            description: item.description,
            price: item.price,
            images,
            category: item.categories.name,
            featured: item.featured,
            era: item.era,
            origin: item.origin,
            materials,
            dimensions: item.dimensions || '',
            condition: item.condition,
            inStock: item.in_stock
          };
        });
        
        setProducts(transformedProducts);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
  }, []);

  return { products, loading, error };
}

export function useFeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        setLoading(true);
        
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select(`
            *,
            categories(*),
            product_images(*),
            product_materials(*)
          `)
          .eq('featured', true)
          .order('created_at', { ascending: false });
          
        if (productsError) throw productsError;
        
        // Transform the data to match our Product type
        const transformedProducts: Product[] = productsData.map((item) => {
          // Extract images from product_images
          const images = item.product_images
            .sort((a: any, b: any) => a.display_order - b.display_order)
            .map((img: any) => img.image_url);
          
          // Extract materials from product_materials
          const materials = item.product_materials.map((mat: any) => mat.material_name);
          
          return {
            id: item.id,
            name: item.name,
            shortDescription: item.short_description,
            description: item.description,
            price: item.price,
            images,
            category: item.categories.name,
            featured: item.featured,
            era: item.era,
            origin: item.origin,
            materials,
            dimensions: item.dimensions || '',
            condition: item.condition,
            inStock: item.in_stock
          };
        });
        
        setProducts(transformedProducts);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        console.error('Error fetching featured products:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchFeaturedProducts();
  }, []);

  return { products, loading, error };
}

export function useProductByCategory(categoryName: string | null) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProductsByCategory() {
      try {
        setLoading(true);
        
        let query = supabase
          .from('products')
          .select(`
            *,
            categories(*),
            product_images(*),
            product_materials(*)
          `);
          
        if (categoryName) {
          // Join with categories to filter by name
          query = query.eq('categories.name', categoryName);
        }
        
        const { data: productsData, error: productsError } = await query
          .order('created_at', { ascending: false });
          
        if (productsError) throw productsError;
        
        // Transform the data to match our Product type
        const transformedProducts: Product[] = productsData.map((item) => {
          // Extract images from product_images
          const images = item.product_images
            .sort((a: any, b: any) => a.display_order - b.display_order)
            .map((img: any) => img.image_url);
          
          // Extract materials from product_materials
          const materials = item.product_materials.map((mat: any) => mat.material_name);
          
          return {
            id: item.id,
            name: item.name,
            shortDescription: item.short_description,
            description: item.description,
            price: item.price,
            images,
            category: item.categories.name,
            featured: item.featured,
            era: item.era,
            origin: item.origin,
            materials,
            dimensions: item.dimensions || '',
            condition: item.condition,
            inStock: item.in_stock
          };
        });
        
        setProducts(transformedProducts);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        console.error('Error fetching products by category:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProductsByCategory();
  }, [categoryName]);

  return { products, loading, error };
}

export function useProductById(productId: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        
        const { data: productData, error: productError } = await supabase
          .from('products')
          .select(`
            *,
            categories(*),
            product_images(*),
            product_materials(*)
          `)
          .eq('id', productId)
          .single();
          
        if (productError) throw productError;
        
        if (!productData) {
          setProduct(null);
          return;
        }
        
        // Extract images from product_images
        const images = productData.product_images
          .sort((a: any, b: any) => a.display_order - b.display_order)
          .map((img: any) => img.image_url);
        
        // Extract materials from product_materials
        const materials = productData.product_materials.map((mat: any) => mat.material_name);
        
        const transformedProduct: Product = {
          id: productData.id,
          name: productData.name,
          shortDescription: productData.short_description,
          description: productData.description,
          price: productData.price,
          images,
          category: productData.categories.name,
          featured: productData.featured,
          era: productData.era,
          origin: productData.origin,
          materials,
          dimensions: productData.dimensions || '',
          condition: productData.condition,
          inStock: productData.in_stock
        };
        
        setProduct(transformedProduct);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        console.error('Error fetching product by ID:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProduct();
  }, [productId]);

  return { product, loading, error };
}