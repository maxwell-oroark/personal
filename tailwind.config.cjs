/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "lilac-100": "#747fe0",
        "lilac-200": "#4352d5",
      },
    },
  },
  plugins: [],
};
