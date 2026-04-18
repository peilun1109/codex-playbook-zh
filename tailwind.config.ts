import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        panel: "#10192d",
        line: "#25314d",
        soft: "#95a4c6",
        accent: "#66d9c1",
        gold: "#f2c66d"
      },
      fontFamily: {
        sans: ["Noto Sans TC", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"]
      },
      boxShadow: {
        panel: "0 20px 60px rgba(3, 8, 20, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
