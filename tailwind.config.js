/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainMedium: "mainMedium",
        main: "main",
        mainSemiBold: "mainSemiBold",
        mainBold: "mainBold",
      },
      colors: {
        main: "#E71D36",
        bodyBg: "#F4F4F4",
        navBg: "#FFFFFF",
        white: "#FFFFFF",
        icon: "#5C5C5C",
        whiteFade: "rgba(255, 255, 255, 0.8)",
        inputBg: "#F2F2F2",
        inputIcon: "rgba(0, 0, 0, 0.5)",
        inputPlaceholder: "rgba(0, 0, 0, 0.3)",
        loaderBg: "#E6E6E6",
        title: "#696969",
        whiteIcon: "#FFFFFF",
        whiteIconBg: "rgba(255, 255, 255, 0.25)",
        info: "#787878",
      },
    },
  },
  plugins: [],
};
