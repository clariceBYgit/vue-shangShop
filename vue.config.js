module.exports = {
  // npm run build 后仍可以查看报错的 地方  true
  productionSourceMap:false,
    // 关闭eslint
    lintOnSave:false,
    // 跨域 代理
    devServer: {
        proxy: {
          '/api': {
            target: 'http://39.98.123.211'
          },
        },
      }
}