/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    fontFamily: {
      pregular: ['Regular'],
      pmedium: ['Medium'],
      psemibold: ['SemiBold'],
      pbold: ['Bold'],
    },
    extend: {
      colors: {
        green700: '#01635D',
        green500: '#089083',
        green50: '#B7DFDB',
        peach300: '#FEA36B',
        peach50: '#FFDDA2',
        links: '#3EAEFF',
        success: '#09C933',
        warning: '#FF941C',
        error: '#FF3636',
        green: '#13ce66',
        primary: '#050505',
        secondary: '#727272',
        white: '#FFFFFF',
        screen: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
