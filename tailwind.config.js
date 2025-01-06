/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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

