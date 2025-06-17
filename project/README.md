# Heritage Bazaar

An e-commerce platform for Albanian antiques with Supabase backend integration.

## Features

- Browse antique products by category
- View detailed product information
- Shopping cart functionality
- Multiple currency support
- Admin dashboard for product management

## Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up Supabase:
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Click "Connect to Supabase" in the StackBlitz interface
   - Follow the prompts to link your Supabase project
   - Apply the database migrations from the `supabase/migrations` folder
4. Update the `.env` file with your Supabase URL and anon key:
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
5. Run the development server with `npm run dev`

## Database Structure

The Supabase database includes the following tables:

- **categories** - Product categories
- **products** - Main product information
- **product_images** - Images for each product
- **product_materials** - Materials used in each product
- **profiles** - Admin user profiles

## Admin Access

To access the admin dashboard:

1. Create a user through Supabase Authentication
2. Add the user to the profiles table with role='admin'
3. Access the admin dashboard at `/admin/login`

## Technologies

- React
- TypeScript
- Tailwind CSS
- Supabase (Auth, Database)
- Vite