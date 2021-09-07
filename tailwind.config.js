module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        padding: {
          '1/3': '33.33%',
          'full': '100%',
          '1/2': '50%'
        },
        transitionProperty: {
          'width': 'width'
        },
        animation: {
          chgbg: 'change background',
        },
        keyframes:{
          chgbg: {
            '50%':{background: 'linear-gradient(45deg, blue, red)'}
          }
        }
      },
    },
    variants: {
      extend: {
        transform: ['hover', 'focus'],
        width: ['responsive','focus'],
        transitionProperty: ['hover','focus'],
        backgroundColor: ['active','focus'],
        borderWidth: ['hover', 'focus'],
        borderColor: ['hover', 'focus'],
        boxSizing: ['hover', 'focus'],
      },
    },
    plugins: [],
  }
  