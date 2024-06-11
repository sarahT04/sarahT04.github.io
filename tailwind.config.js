/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "teachers": ['Teachers', 'sans-serif']
      },
      colors: {
        "main-light": "#fffcf2",
        "main-dark": "#252422",
        "main-orange": "#eb5e28"
      }
    },
  },
  plugins: [
    // require('daisyui'),
  ],
};
