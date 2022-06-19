/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        sm: "640px",
        lg: "1024px",
        md: "768px",
        xl: "1280px",
      },
    },
    fontSize: {
      sm: ["24px", "30px"],
      base: ["26px", "34px"],
      lg: ["30px", "38px"],
      xl: ["64px", "52px"],
      md: ["32px", "42px"],
      // "2xl": "1.5rem",
      // "3xl": "1.875rem",
      // "4xl": "2.25rem",
      // "5xl": "3rem",
      // "6xl": "4rem",
      // "7xl": "5rem",
    },
    extend: {},
  },
  plugins: [],
};
