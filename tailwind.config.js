/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      xsm: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xlg: "1100px",
      xl: "1280px",
      "2xl": "1536px",
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      fontFamily: {
        inter: [' "Inter", sans-serif;'],
        poppins: [' "Poppins", sans-serif;'],
        montserrat: ['"Montserrat", sans-serif;'],
      },
      colors: {
        primaryGreen: "#001A04",
        lightgreen: "#B6F485",
      },
    },
  },
  plugins: [],
};
