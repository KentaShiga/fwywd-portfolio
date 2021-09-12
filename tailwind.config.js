const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      header: '#6bc2c3',
      footer: '#262c3a',
    }),
    extend: {
      backgroundImage: (theme) => ({
        about: "url('/images/bg-about.png')",
        skills: "url('/images/bg-skills.png')",
        'skills-sp': "url('/images/bg-skills-sp.png')",
        future: "url('/images/bg-future.png')",
        'future-sp': "url('/images/bg-future-sp.png')",
      }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      'progress-light': '#c5eaea',
      'progress-dark': '#2bb9ba',
      'border-greenlight': '#c5eaea',
    },
    textColor: {
      white: colors.white,
      black: '#243c5a',
      green: '#008c8d',
    },
  },
};
