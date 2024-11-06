/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Wix Madefor Display', 'sans-serif'], // Use for general text
        mono: ['Fira Code', 'monospace'], // Use for code or specific sections
      },
      colors: {
        'navy-900': '#1a1f36', // Dark navy
        'navy-800': '#212a45',
        'blue-700': '#324b81', // Light blue accents
        'blue-800': '#2a4074',
        'blue-400': '#4f6bbf',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

