import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotes: ['var(--font-grotes_dark)'],
        grotes_space: ['var(--font-grotes_space)'],
      }
    },
  },
  plugins: [nextui()],
};
export default config;
