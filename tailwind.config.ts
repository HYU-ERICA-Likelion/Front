import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
} satisfies Config;
