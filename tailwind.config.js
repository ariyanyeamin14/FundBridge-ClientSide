/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dark: '0 4px 6px rgba(0, 0, 0, 0.5)', // Custom dark shadow
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: "class",
}

