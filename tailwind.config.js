/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        textColor: "#6b7280",
        titleColor: "#1f2937"
      },
      fontFamily: {
        cour: ["Courier Prime", "serif"]
      }
    },
  },
  plugins: [],
}

