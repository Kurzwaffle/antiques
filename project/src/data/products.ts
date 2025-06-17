import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Antique Albanian Chest',
    shortDescription: 'This section displays a brief description of the antique item',
    description: 'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
    price: 2800,
    images: [
      'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg',
      'https://images.pexels.com/photos/6758778/pexels-photo-6758778.jpeg'
    ],
    category: 'Furniture',
    featured: true,
    era: '19th Century',
    origin: 'Northern Albania',
    materials: ['Oak wood', 'Traditional joinery'],
    dimensions: '120cm x 80cm x 60cm',
    condition: 'Excellent, minor age-appropriate wear',
    inStock: true
  },
  {
    id: '2',
    name: 'Silver Filigree Artifact',
    shortDescription: 'This text provides a quick summary of the antique item',
    description: 'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
    price: 1450,
    images: [
      'https://images.pexels.com/photos/6431292/pexels-photo-6431292.jpeg',
      'https://images.pexels.com/photos/6431293/pexels-photo-6431293.jpeg'
    ],
    category: 'Silver & Metalwork',
    featured: true,
    era: 'Late 19th Century',
    origin: 'Southern Albania',
    materials: ['Silver', 'Filigree technique'],
    dimensions: '12cm x 8cm x 5cm',
    condition: 'Very good, light tarnish consistent with age',
    inStock: true
  },
  {
    id: '3',
    name: 'Traditional Albanian Carpet',
    shortDescription: 'This text highlights key features of the antique item',
    description: 'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
    price: 3600,
    images: [
      'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg',
      'https://images.pexels.com/photos/6480709/pexels-photo-6480709.jpeg'
    ],
    category: 'Carpets & Textiles',
    featured: true,
    era: 'Early 20th Century',
    origin: 'Southeastern Albania',
    materials: ['Wool', 'Natural dyes'],
    dimensions: '240cm x 160cm',
    condition: 'Good condition with minor repairs, beautiful patina',
    inStock: true
  },
  {
    id: '4',
    name: 'Antique Wooden Cabinet',
    shortDescription: 'This section contains a concise overview of the product',
    description: 'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
    price: 2200,
    images: [
      'https://images.pexels.com/photos/6758776/pexels-photo-6758776.jpeg',
      'https://images.pexels.com/photos/6758780/pexels-photo-6758780.jpeg'
    ],
    category: 'Furniture',
    featured: false,
    era: 'Late 19th Century',
    origin: 'Central Albania',
    materials: ['Oak wood', 'Iron hardware'],
    dimensions: '120cm x 60cm x 70cm',
    condition: 'Good structural condition, signs of use consistent with age',
    inStock: true
  },
  {
    id: '5',
    name: 'Copper Serving Set',
    shortDescription: 'This text presents the antique item in a concise manner',
    description: 'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
    price: 980,
    images: [
      'https://images.pexels.com/photos/5380989/pexels-photo-5380989.jpeg',
      'https://images.pexels.com/photos/5380645/pexels-photo-5380645.jpeg'
    ],
    category: 'Copper & Metalwork',
    featured: false,
    era: 'Early 20th Century',
    origin: 'Central Albania',
    materials: ['Copper', 'Brass accents'],
    dimensions: 'Tray: 40cm diameter, Pot: 18cm height',
    condition: 'Excellent, original patina',
    inStock: true
  },
  {
    id: '6',
    name: 'Decorative Metal Piece',
    shortDescription: 'This brief text describes key features of the antique',
    description: 'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
    price: 1800,
    images: [
      'https://images.pexels.com/photos/6468199/pexels-photo-6468199.jpeg',
      'https://images.pexels.com/photos/6044278/pexels-photo-6044278.jpeg'
    ],
    category: 'Jewelry & Personal Items',
    featured: true,
    era: 'Mid 19th Century',
    origin: 'Northern Albania',
    materials: ['Silver', 'Coral', 'Filigree work'],
    dimensions: '18cm x 12cm',
    condition: 'Very good, minor age-appropriate wear',
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};