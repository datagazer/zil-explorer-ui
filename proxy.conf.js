const apiVersion = 'v1';

module.exports = {
  [`/${apiVersion}/*`]: {
    target: 'https://zilexplorer.datagazer.io',
    secure: false,

    // pathRewrite: {
    //   [`^/${apiVersion}`]: ''
    // },

    changeOrigin: true,
    autoRewrite: true
  },

  '/zilliqa': {
    target: 'https://api.zilliqa.com',
    secure: false,

    pathRewrite: {
      '^/zilliqa': ''
    },

    changeOrigin: true,
    autoRewrite: true
  }
};
