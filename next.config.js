// next.config.js
const withCSS = require('@zeit/next-css')
let config = withCSS({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    }
})

Object.assign(config, {
    experimental: {
        modern: true,
        granularChunks: true
    }
})

module.exports = config
