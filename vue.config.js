module.exports = {
    devServer: {
        hot: true,
        open: true,
    },
    publicPath:'./',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            // config.externals = {
            //   'axios': 'axios',
            //   'lottie-web': 'lottie-web',
            // }
        } else {
            // 为开发环境修改配置...
        }

    }
}
