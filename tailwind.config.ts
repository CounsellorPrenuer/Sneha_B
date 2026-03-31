import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B22222",
        "gradient-start": "#8B0000",
        "gradient-end": "#FF4D4D",
        "brand-text": "#2B2B2B",
        "brand-bg": "#F5F0EC",
        gold: "#C9A45C",
        borders: "#E5E5E5",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #8B0000, #FF4D4D)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 30px rgba(0, 0, 0, 0.05)",
        "premium-hover": "0 20px 40px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
