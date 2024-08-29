/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /col-span-(1|2|3)/
    }
  ],
  plugins: [],
}

