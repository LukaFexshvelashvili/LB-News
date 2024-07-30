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
        whiteTitle: "rgba(255, 255, 255, 0.8)",
        white: "#FFFFFF",
        whiteHover: "#f7f7f7",
        dark: "rgba(0, 0, 0, 0.8)",
        iconFade: "rgba(0, 0, 0, 0.2)",
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

        blackFade: "rgba(0, 0, 0, 0.7)",
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
    screens: {
      medium: { max: "1100px" },
      mobile: { max: "800px" },
      mobileSm: { max: "650px" },
      mobileSm2: { max: "450px" },
      mobileSmallest: { max: "390px" },
    },
  },
  plugins: [],
};
