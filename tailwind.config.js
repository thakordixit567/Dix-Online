/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Bebas Neue", "sans-serif"],
        secondary: ["Monoton", "sans-serif"],
        fortext: ["Josefin Sans", "sans-serif"],
        title: ["Pacifico", "sans-serif"],
        about: ["Source Code Pro   ", "sans-serif"],
      },
    },
  },
  plugins: [],
};
