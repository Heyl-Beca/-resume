// 配置
const path = require('path')
function resolve (dir) {
  return path.resolve(__dirname, dir)
}
// 配置jQuery
const webPack = require('webpack')
module.exports = {
  // lintOnSave: true,
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('assets', resolve('src/assets'))
  //     .set('components', resolve('src/components'))
  //     .set('router', resolve('src/router'))
  //     .set('utils', resolve('src/utils'))
  //     .set('static', resolve('src/static'))
  //     .set('store', resolve('src/store'))
  //     .set('views', resolve('src/views'))
  // },
  // 配置文件别名
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'router': resolve('src/router'),
        'utils': resolve('src/utils'),
        'static': resolve('src/static'),
        'store': resolve('src/store'),
        'views': resolve('src/views')
      }
    },
    plugins: [
      new webPack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  // 跨域配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    },
    port: 8036,
    hot: true,
    open: 'Google Chrome'
  },
  // assetsDir: 'assets', // 静态文件目录
  // publicPath: './', // 编译后的地址，可以根据环境进行设置
  // lintOnSave: true // 是否开启编译时是否不符合eslint提示

  // css
  css: {
    loaderOptions: {
      // @/ is an alias to src/
      less: {
        data: `
          @import "@/assets/css/variable.less";
          @import "@/assets/css/common.less";
          @import "@/assets/css/mixin.less";
          `
      }
    }
  }
}
