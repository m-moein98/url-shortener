module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
			"10v": "10vh",
			"12v": "12vh",
			"13v": "13vh",
			"14v": "14vh",
      "15v": "15vh",
      '90v': '90vh',
    },
    minHeight: {
      '0': '0',
      "10v":"10vh",
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '90v': '90vh',
      'full': '100%',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
