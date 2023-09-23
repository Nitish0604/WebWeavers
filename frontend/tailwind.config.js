/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      beige: "#efefc3",
      lightgreen: "#b4b431",
      deepgreen: "#64641b",
      blue: "#",
    },
    animation: {
      wiggle: "wiggle 15s steps(4) infinite",
    },

    boxShadow: {
      r1: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      r2: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      r3: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    extend: {},
  },
  plugins: [],
};
