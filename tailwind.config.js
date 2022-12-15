/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './ui/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'light-button':
          '6px 6px 8px 0 rgba(0, 0, 0, .25), -4px -4px 6px 0 rgba(0, 0, 0, .25)',
      },
      spacing: {
        300: '30rem',
        400: '40rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
