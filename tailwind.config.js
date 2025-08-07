module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      xsm:'30rem',
      sm: '640px',
      md: '768px',
      mlg: '62rem',   // ✅ Custom breakpoint
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px', // ✅ Custom breakpoint
      '3xl': '1600px', // ✅ Custom breakpoint
      xxl:'1500px'
    },
    extend: {
      keyframes: {
        arrowColorChange: {
          '0%, 100%': { 'border-left-color': 'rgb(249 115 22)' }, // orange-500
          '50%': { 'border-left-color': '#ff6d05' },
        },
      },
      animation: {
        arrowColorChange: 'arrowColorChange 0.8s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {
      // This enables the animation variant for before and after pseudo-elements
      animation: ['before', 'after'],
      borderColor: ['before', 'after'], // Important for border color animations
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements',  '@tailwindcss/line-clamp'),
    
  ],
};
