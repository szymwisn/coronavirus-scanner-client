module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    borderRadius: {
      sm: '0.25rem',
      lg: '1rem',
      xl: '25rem',
    },
    extend: {
      colors: {
        cvsDark: '#212121',
        cvsGray: '#F5F5F5',
        cvsPurple: '#5C59F1',
        cvsPurpleLighter: '#7774F4',
        cvsRed: '#F45A5A',
        cvsYellow: '#E8BB48',
        cvsGreen: '#29C567',
      },
      boxShadow: {
        cvsDark: '0 4px 15px 0 rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'virus-bg': "url('/assets/images/virus.jpg')",
      },
    },
  },
  variants: ['responsive', 'hover', 'focus', 'active'],
  plugins: [],
};
