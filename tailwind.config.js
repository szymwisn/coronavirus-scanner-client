module.exports = {
  purge: [],
  theme: {
    borderRadius: {
      lg: '1rem',
    },
    extend: {
      colors: {
        cvsDark: '#212121',
        cvsGray: '#F5F5F5',
        cvsPurple: '#5C59F1',
        cvsRed: '#F45A5A',
      },
      fontFamily: {
        cvs: ['Roboto'],
      },
      boxShadow: {
        cvsDark: '0 4px 15px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  },
  variants: ['responsive', 'hover', 'focus', 'active'],
  plugins: [],
};
