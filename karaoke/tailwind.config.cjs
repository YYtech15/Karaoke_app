/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/utils/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
  ],
  options: {
    safelist: [],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};