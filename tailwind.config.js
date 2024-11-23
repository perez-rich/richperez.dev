import daisyui from 'daisyui';
import theme from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        corporate: {
          ...theme["corporate"],
          error: '#CD4206'
        }
      }
    ],
  }
}

