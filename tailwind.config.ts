import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
        colors: {
          primary: "#F08314",
          gray4: "#474343",
          gray5: "#5A5858",
          background: "#292725",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
