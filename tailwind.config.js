/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "light-purple": "hsl(231°, 77%, 90%)",
      "lighter-black": "hsl(230°, 35%, 7%)",
    },
    fontFamily: {
      primary: ["Bellefair", "serif"],
      secondary: ["Barlow Condensed", "sans-serif"],
    },
    fontWeight: {
      regular: 400,
    },
    screens: {
      tablet: "48rem",
      desktop: "64rem",
    },
  },
  plugins: [],
};
