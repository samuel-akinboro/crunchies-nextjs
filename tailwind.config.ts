import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '30': '7.5rem', // 120px
      },
      height: {
        '30': '7.5rem', // 120px
      },
      colors: {
        primary: '#E90C31',
        primaryLight: 'rgba(233,12,49,0.3)',
        red100: '#E5667C',
        green: '#34C759'
      },
    },
  },
  plugins: [],
};
export default config;
