import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-carousel":"linear-gradient(112deg, #1D2948 0%, #141D33 25%, #0F1628 38%, #050A16 100%)",
        "border-carousel": "linear-gradient(45deg, #7A4DDB 8%, #301435 53%, #7C4FDB 97%)",
      },
      keyframes: {
        'move-cards': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'move-cards': 'move-cards 10s linear infinite',
      },
      screens: {
        "xs": "480px"
      }
    },
  },
  plugins: [],
};
export default config;
