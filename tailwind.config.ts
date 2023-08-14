import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#090E34',
      'body-color': '#FFFFFF',
      dark: '#1a1a1a',
      primary: {
        light: '#aef147',
        DEFAULT: 'greenyellow',
        dark: '#4D7C0F',
      },
      yellow: '#FBB040',
      gray: colors.gray,
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      lime: colors.lime,
      red: colors.red,
      blue: colors.lightBlue,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config
