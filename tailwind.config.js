/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'nav_link_hover':'hsl(var(--hue), var(--sat), 0%)',
        'nav_link-active':'hsl(var(--hue), var(--sat), 0%)'
      }
    },
  },
  plugins: [],
}