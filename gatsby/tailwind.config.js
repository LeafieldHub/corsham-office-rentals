module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primary: '#2a5c6a', // CHANGE THIS HEX CODE TO YOUR NEW COLOUR
        secondary: '#F3F4F6',
      },
      width: {
        '3/10': '30%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};