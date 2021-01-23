module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
			"11v": "11vh",
			"12v": "12vh",
			"13v": "13vh",
			"14v": "14vh",
			"15v": "15vh",
    },
    minHeight: {
      '0': '0',
      "11v":"11vh",
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '89v': '89vh',
      'full': '100%',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
