// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: '/',
  devServer: {
    proxy: {
      '/': {
        target: 'https://api.bgm.tv',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
// .env.development
// VUE_APP_BASE_API = /api
