module.exports = {
  lintOnSave: false, 
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: '/',
  devServer: {
    port: 12345,
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