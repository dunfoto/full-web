const withCSS = require('@zeit/next-css')

module.exports = withCSS(
    {
        lessLoaderOptions: {
            javascriptEnabled: true,
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]"
        }
    }
)