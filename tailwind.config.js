/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#176072',
        secondary: '#d5dff6',
        'bg-main': '#ffffff',
        text: '#040201',
        accent: '#060d1e',
        'bg-two': '#f7f7f7',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

