import { heroui } from "@heroui/theme";
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/components/(button|input|modal|radio|toggle|avatar|accordion|listbox|slider|badge).{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#fb5467',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()]
};
export default config;
