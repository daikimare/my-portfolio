module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans':[
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Futura',
        'Holland'
      ]
    },
    extend: {
      backgroundImage: theme => ({
        'shinjiko': "url('/public/bacground/shinjiko-img.jpg')",
      }),
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
      }
    },
    variants: {
      backgroundOpacity:[
        'responsive',
        'hover',
        'focus',
        'active'
      ],
      extend: {},
    },
    plugins: [],
  }
}