// craco.config.js
module.exports = {
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
