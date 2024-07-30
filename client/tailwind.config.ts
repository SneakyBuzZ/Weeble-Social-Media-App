/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        WEEBLE_DARK_PRIMARY: "#0F0F0F",
        WEEBLE_DARK_SECONDARY: "#141414",
        WEEBLE_LIGHT_PINK: "#FF8BB4",
        WEEBLE_PINK: "#B33764",
        WEEBLE_TEXT_PRIMARY: "#E3E3E3",
        WEEBLE_TEXT_SECONDARY: "#959595",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
};
