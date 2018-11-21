const apiVersion = 'v1';

module.exports = {
  [`/${apiVersion}/*`]: {
    target: 'http://54.93.77.136:8080',
    secure: false,

    pathRewrite: {
      [`^/${apiVersion}`]: '/'
    },

    changeOrigin: true,
    autoRewrite: true
  }
};
