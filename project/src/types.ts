export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  images: string[];
  category: string;
  featured: boolean;
  era: string;
  origin: string;
  materials: string[];
  dimensions: string;
  condition: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Currency = 'USD' | 'EUR' | 'GBP';

export interface ExchangeRates {
  USD: number;
  EUR: number;
  GBP: number;
}