/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FCE7E9',
          100: '#F8CFD3',
          200: '#F0A0A8',
          300: '#E87079',
          400: '#DF414E',
          500: '#D71323',
          600: '#AD0F1C',
          700: '#7D2027',
          800: '#581C22',
          900: '#38181C',
        },
        gold: {
          50: '#FCF6E6',
          100: '#F9EECF',
          200: '#F3DD9F',
          300: '#EDCD6F',
          400: '#E7BC3F',
          500: '#D4AF37',
          600: '#A9832D',
          700: '#7D5822',
          800: '#523C18',
          900: '#27200E',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};