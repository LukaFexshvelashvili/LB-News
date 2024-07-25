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
        mainHover: "#de1d34",
        mainClear: "rgba(231, 29, 53, 0.1)",
        mainClearHover: "rgba(231, 29, 53, 0.15)",
        bodyBg: "#F4F4F4",
        navBg: "#FFFFFF",
        white: "#FFFFFF",
        icon: "#ffffff",
        iconBg: "rgba(255, 255, 255, 0.1)",
        iconBgHover: "rgba(255, 255, 255, 0.2)",
        whiteFade: "rgba(255, 255, 255, 0.8)",
        iconGray: "#5C5C5C",
        iconGrayBg: "rgba(92, 92, 92, 0.1)",
        iconGrayBgHover: "rgba(92, 92, 92, 0.2)",
        inputBg: "#F2F2F2",
        inputFocus: "#EBEBEB",
        lightBorder: "#d6d6d6",

        inputIcon: "rgba(0, 0, 0, 0.5)",
        inputPlaceholder: "rgba(0, 0, 0, 0.3)",
        loaderBg: "#E6E6E6",
        title: "#696969",
        description: "#808080",
        whiteIcon: "#FFFFFF",
        whiteIconBg: "rgba(255, 255, 255, 0.25)",
        info: "#787878",
      },
    },
  },
  plugins: [],
};
