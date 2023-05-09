/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': 'rgba(68, 68, 68, 1)',
        'default': 'rgba(255, 56, 17, 1)',
        'img_bg': '#F3F3F3',
        'dark02':'rgba(68, 68, 68, 1)'
        
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono':['Goldman', 'cursive']
      },
      height: {
        '600': '600px',
      }
    },
  },
  plugins: [require("daisyui")],
}

