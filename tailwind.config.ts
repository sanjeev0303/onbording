// filepath: c:\Users\Sanjeev kumar\Desktop\onbording\tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        themeBlack: '#09090B',
        themeGray: '#27272A',
        themeDarkGray: '#27272A',
        themeTextGray: '#B4B0AE',
        themeTextWhite: '#F7ECE9',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // ...other plugins...
  ],
};
