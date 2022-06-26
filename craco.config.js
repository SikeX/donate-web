// craco.config.js
const fastRefreshCracoPlugin = require('craco-fast-refresh')

module.exports = {
  plugins: [{ plugin: fastRefreshCracoPlugin }],
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line global-require
        require('tailwindcss'),
        // eslint-disable-next-line global-require
        require('autoprefixer'),
      ],
    },
  },
}
