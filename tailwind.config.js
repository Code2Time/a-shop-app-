/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "500px",
        // => @media (min-width: 380px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }
         smd : "999px",
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "my-white": "#ffffff",
        "blue-one": "#EDF3FB",
        "blue-two": "#CBE3EF",
        "blue-three": "#5AA8D6",
        "blue-four": "#3A4163",
        "head-white": "#d1d5db",
      },
      backgroundColor: {
        button: "#00abe1",
        "button-two": "#5AA8D6",
        bg: "#020621",
      },
    },
  },
  plugins: [],
};
