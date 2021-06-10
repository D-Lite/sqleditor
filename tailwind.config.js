module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primarygradient': '#CB356B',
      'secondgradient': '#BD3F32',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
