/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Noto Sans TC', 'sans-serif'] },
      colors: {
        selected: '#AA6666',
        background: '#DCCCBC',
        decor: '#AA6666',
      },
    },
  },
  plugins: [],
};
