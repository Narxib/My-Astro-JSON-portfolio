/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}','./src/components/**/*.{js,jsx,ts,tsx,astro}'],
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

