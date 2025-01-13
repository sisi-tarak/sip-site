/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xs": { max: "424px" },
      xs: { min: "425px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
      "3xl": { min: "1936px" },
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "serif"],
    },
    extend: {
      colors: {
        backgroundColor: "#1a2b31",
        headColor: "#ffffff",
        textColor: "#efefef",
        secondaryTextColor: "#a0a0a0",
        logoGreenColor: "#16cf95",
        logoBlueColor: "#1a2b31",
        buttonBgColor: "#16cf95",
        buttonTextColor: "#1a2b31",
        navlinkColor: "#ffffff",
        navlinkHoverColor: "#16cf95",
        viewProfileBtnBgColor: "#3b3b3b",
        coverMainTextColor: "#c5c5c5",
        brandsBgColor: "#222222",
      },
    },
  },
  plugins: [],
  important: "#root",
};
