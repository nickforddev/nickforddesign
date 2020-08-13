const path = require('path')

module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false
  },
  chainWebpack: config => {
    config.entry('app')
      .clear()
      .add('./src/js/main.js')
    config.resolve.alias
      .delete('@')
      .set('@', path.resolve(__dirname, 'src/js'))
      .set('%', path.resolve(__dirname, 'src/scss/modules'))
  }
}
