const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 编译成库时需要移除以下两个包的引用。
  configureWebpack: config => {
    config.externals = {
      // axios: 'axios',
      // 'lottie-web': 'lottie-web'
    }
  }
})
