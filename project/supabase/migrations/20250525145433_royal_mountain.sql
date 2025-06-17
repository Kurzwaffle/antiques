/*
  # Seed data for Heritage Bazaar

  1. Initial Data
    - Seed categories for antiques
    - Seed sample products
    - Seed product images
    - Seed product materials
*/

-- Seed categories
INSERT INTO categories (name, description)
VALUES 
  ('Furniture', 'Traditional handcrafted furniture with historical significance'),
  ('Silver & Metalwork', 'Intricate filigree and metalwork from master craftsmen'),
  ('Carpets & Textiles', 'Handwoven carpets and textiles with traditional patterns'),
  ('Jewelry & Personal Items', 'Cultural adornments and personal artifacts'),
  ('Copper & Metalwork', 'Traditional copper items used in Albanian households')
ON CONFLICT (name) DO NOTHING;

-- Get category IDs (for reference in products)
WITH category_ids AS (
  SELECT id, name FROM categories
)
-- Seed sample products
INSERT INTO products (
  name, 
  short_description, 
  description,
  price,
  category_id,
  featured,
  era,
  origin,
  dimensions,
  condition,
  in_stock
)
SELECT
  'Antique Albanian Chest',
  'This section displays a brief description of the antique item',
  'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
  2800,
  id,
  true,
  '19th Century',
  'Northern Albania',
  '120cm x 80cm x 60cm',
  'Excellent, minor age-appropriate wear',
  true
FROM category_ids
WHERE name = 'Furniture'

UNION ALL

SELECT
  'Silver Filigree Artifact',
  'This text provides a quick summary of the antique item',
  'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
  1450,
  id,
  true,
  'Late 19th Century',
  'Southern Albania',
  '12cm x 8cm x 5cm',
  'Very good, light tarnish consistent with age',
  true
FROM category_ids
WHERE name = 'Silver & Metalwork'

UNION ALL

SELECT
  'Traditional Albanian Carpet',
  'This text highlights key features of the antique item',
  'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
  3600,
  id,
  true,
  'Early 20th Century',
  'Southeastern Albania',
  '240cm x 160cm',
  'Good condition with minor repairs, beautiful patina',
  true
FROM category_ids
WHERE name = 'Carpets & Textiles'

UNION ALL

SELECT
  'Antique Wooden Cabinet',
  'This section contains a concise overview of the product',
  'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
  2200,
  id,
  false,
  'Late 19th Century',
  'Central Albania',
  '120cm x 60cm x 70cm',
  'Good structural condition, signs of use consistent with age',
  true
FROM category_ids
WHERE name = 'Furniture'

UNION ALL

SELECT
  'Copper Serving Set',
  'This text presents the antique item in a concise manner',
  'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
  980,
  id,
  false,
  'Early 20th Century',
  'Central Albania',
  'Tray: 40cm diameter, Pot: 18cm height',
  'Excellent, original patina',
  true
FROM category_ids
WHERE name = 'Copper & Metalwork'

UNION ALL

SELECT
  'Decorative Metal Piece',
  'This brief text describes key features of the antique',
  'This is where a detailed description of the antique would appear. It would include historical context, materials, craftsmanship details, and cultural significance of the piece. The description would be several sentences long to provide comprehensive information for potential buyers.',
  1800,
  id,
  true,
  'Mid 19th Century',
  'Northern Albania',
  '18cm x 12cm',
  'Very good, minor age-appropriate wear',
  true
FROM category_ids
WHERE name = 'Jewelry & Personal Items';

-- Seed product images
WITH product_data AS (
  SELECT id, name FROM products
)
INSERT INTO product_images (product_id, image_url, is_primary, display_order)
SELECT 
  p.id,
  CASE 
    WHEN p.name = 'Antique Albanian Chest' THEN 'https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg'
    WHEN p.name = 'Silver Filigree Artifact' THEN 'https://images.pexels.com/photos/6431292/pexels-photo-6431292.jpeg'
    WHEN p.name = 'Traditional Albanian Carpet' THEN 'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg'
    WHEN p.name = 'Antique Wooden Cabinet' THEN 'https://images.pexels.com/photos/6758776/pexels-photo-6758776.jpeg'
    WHEN p.name = 'Copper Serving Set' THEN 'https://images.pexels.com/photos/5380989/pexels-photo-5380989.jpeg'
    WHEN p.name = 'Decorative Metal Piece' THEN 'https://images.pexels.com/photos/6468199/pexels-photo-6468199.jpeg'
  END,
  true,
  1
FROM product_data p

UNION ALL

SELECT 
  p.id,
  CASE 
    WHEN p.name = 'Antique Albanian Chest' THEN 'https://images.pexels.com/photos/6758778/pexels-photo-6758778.jpeg'
    WHEN p.name = 'Silver Filigree Artifact' THEN 'https://images.pexels.com/photos/6431293/pexels-photo-6431293.jpeg'
    WHEN p.name = 'Traditional Albanian Carpet' THEN 'https://images.pexels.com/photos/6480709/pexels-photo-6480709.jpeg'
    WHEN p.name = 'Antique Wooden Cabinet' THEN 'https://images.pexels.com/photos/6758780/pexels-photo-6758780.jpeg'
    WHEN p.name = 'Copper Serving Set' THEN 'https://images.pexels.com/photos/5380645/pexels-photo-5380645.jpeg'
    WHEN p.name = 'Decorative Metal Piece' THEN 'https://images.pexels.com/photos/6044278/pexels-photo-6044278.jpeg'
  END,
  false,
  2
FROM product_data p;

-- Seed product materials
WITH product_data AS (
  SELECT id, name FROM products
)
INSERT INTO product_materials (product_id, material_name)
SELECT p.id, 'Oak wood' FROM product_data p WHERE p.name = 'Antique Albanian Chest'
UNION ALL
SELECT p.id, 'Traditional joinery' FROM product_data p WHERE p.name = 'Antique Albanian Chest'
UNION ALL
SELECT p.id, 'Silver' FROM product_data p WHERE p.name = 'Silver Filigree Artifact'
UNION ALL
SELECT p.id, 'Filigree technique' FROM product_data p WHERE p.name = 'Silver Filigree Artifact'
UNION ALL
SELECT p.id, 'Wool' FROM product_data p WHERE p.name = 'Traditional Albanian Carpet'
UNION ALL
SELECT p.id, 'Natural dyes' FROM product_data p WHERE p.name = 'Traditional Albanian Carpet'
UNION ALL
SELECT p.id, 'Oak wood' FROM product_data p WHERE p.name = 'Antique Wooden Cabinet'
UNION ALL
SELECT p.id, 'Iron hardware' FROM product_data p WHERE p.name = 'Antique Wooden Cabinet'
UNION ALL
SELECT p.id, 'Copper' FROM product_data p WHERE p.name = 'Copper Serving Set'
UNION ALL
SELECT p.id, 'Brass accents' FROM product_data p WHERE p.name = 'Copper Serving Set'
UNION ALL
SELECT p.id, 'Silver' FROM product_data p WHERE p.name = 'Decorative Metal Piece'
UNION ALL
SELECT p.id, 'Coral' FROM product_data p WHERE p.name = 'Decorative Metal Piece'
UNION ALL
SELECT p.id, 'Filigree work' FROM product_data p WHERE p.name = 'Decorative Metal Piece';