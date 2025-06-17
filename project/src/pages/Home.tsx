import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-700">
          This is a modern website template built with React, TypeScript, and Supabase.
        </p>
      </main>
    </div>
  );
};

export default Home; 