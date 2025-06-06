/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF5EF',
          100: '#FAEAD9',
          200: '#F5D6B3',
          300: '#F0C28D',
          400: '#EBAD67',
          500: '#E69941',
          600: '#CD7F32',
          700: '#B87333',
          800: '#9E5E29',
          900: '#84491F',
        },
        secondary: {
          50: '#F2F5F9',
          100: '#E5EBF3',
          200: '#C6D7E6',
          300: '#A7C3D9',
          400: '#89AFCC',
          500: '#6A9BBF',
          600: '#3D7A9F',
          700: '#2D5A77',
          800: '#1E3A4F',
          900: '#0F1A27',
        },
        dark: '#1A2A3A',
        light: '#F9F6F3',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(26, 42, 58, 0.7), rgba(26, 42, 58, 0.7)), url('https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'process-pattern': "linear-gradient(rgba(26, 42, 58, 0.85), rgba(26, 42, 58, 0.85)), url('https://images.pexels.com/photos/2884870/pexels-photo-2884870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
}