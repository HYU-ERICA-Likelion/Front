import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "22.5rem", // 360px
        tablet: "48rem", // 768px
        desktop: "68.75rem", // 1100px
      },
      colors: {
        primary: "#F08314",
        gray4: "#474343",
        gray5: "#5A5858",
        gray6: "#444040",
        background: "#292725",
        black: "#000000",
        white: "#ffffff",
        whiteTransparent55: "rgba(255, 255, 255, 0.55)",
        whiteTransparent70: "rgba(255, 255, 255, 0.70)",
        subWhite: "#cfcfcf",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(25%)" },
          "100%": { transform: "translateY(-100%)" },
        },

        modalFadeIn: {
          "0%": {
            transform: "scale(0.85) translate(-55%, -60%)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) translate(-50%, -50%)",
            opacity: "1",
          },
        },
        modalFadeOut: {
          "0%": {
            transform: "scale(1) translate(-50%, -50%)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0.85) translate(-55%, -60%)",
            opacity: "0",
          },
        },

        showBackDrop: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        endingCredit: "scroll 30s linear infinite",
        modalFadeIn: "modalFadeIn 0.4s ease forwards",
        modalFadeOut: "modalFadeOut 0.4s ease forwards",
        showBackDrop: "showBackDrop 0.4s ease forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
