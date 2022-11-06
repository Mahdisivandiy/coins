/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      primary: '#EFBB38',
      greenLight: 'rgba(0, 204, 102, 0.2);',
      primaryLight: '#FECB38',
      primaryDark: '#CB9633',
      primaryFade: '#FEE59B',
      primarySoft: '#FFF2CD',
      green: '#00CC66',
      greenDark: '#00BB5C',
      red: '#F6465D',
      redDark: '#E1384F',
      blue: '#18A0FF',
      black: '#151513',
      gray: '#999999',
      gray2: '#777777',
      gray3: '#CFCFCF',
      gray4: '#F7F7F7',
      gray5: '#EFEFF0',
    },
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        7: 'repeat(7,  1fr)',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      container: {
        center: true,
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
      transitionProperty: {
        'max-height': 'max-height',
        spacing: 'margin, padding',
      },
    },
    plugins: [],
  },
};
