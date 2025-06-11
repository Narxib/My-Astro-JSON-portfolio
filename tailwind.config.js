/** @type {import('tailwindcss').Config} */
export default {
 
    content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}'],
    safelist:["text-gray-300","text-gray-200"],
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        textColor: "#6b7280",
        titleColor: "#1f2937"
      },
    },
  },
  plugins: [],
  darkMode: ["class"]
}

