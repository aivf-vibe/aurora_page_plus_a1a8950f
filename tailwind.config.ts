import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#2A5A3B",
        secondary: "#8B593E",
        accent: "#E6B17E",
        cream: "#FAF6F1",
      },
    },
  },
  plugins: [],
};

export default config;