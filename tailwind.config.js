/** @type {import('tailwindcss').Config} */
export default {
  purge:{
    enable:true,
    content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}']
  },
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

