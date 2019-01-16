module.exports = {
  lintOnSave: false,

  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: '/cyx',

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
  },

  pwa: {
    name: 'e轩Bangumi',
    themeColor: '#90a4ae'
  },

  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
}
// .env.development
// VUE_APP_BASE_API = /api