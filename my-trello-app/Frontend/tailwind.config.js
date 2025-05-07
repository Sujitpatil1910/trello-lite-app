/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,jsx}', 
      './components/**/*.{js,jsx}',
      './styles/**/*.{js,jsx}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1D4ED8',  // Tailwind's default blue
          secondary: '#2563EB', // A slightly lighter blue
          accent: '#F59E0B',    // A yellow accent color
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Add a custom sans-serif font (Inter is popular)
        },
      },
    },
    plugins: [],
  }
  