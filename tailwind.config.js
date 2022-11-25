/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // content: ["./*.html"],
  theme: {
    // Custom Tailwind Breakpoints
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      // Theme Colors
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      // All Fonts
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
