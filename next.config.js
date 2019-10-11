// next.config.js
const withCSS = require('@zeit/next-css')

let config = {}

// Object.assign(config, withCSS({
//     webpack(config, options) {
//         console.log(config.module.rules)
//         return config
//     },
//     cssModules: true,
//     cssLoaderOptions: {
//         importLoaders: 1,
//         localIdentName: "[local]___[hash:base64:5]",
//     }
// }))

module.exports = {
    experimental: {
        modern: true,
        granularChunks: true
    },
    webpack: (config, { defaultLoaders }) => {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                defaultLoaders.babel,
                {
                    loader: require('styled-jsx/webpack').loader,
                    options: {
                        type: 'scoped'
                    }
                }
            ]
        })

        return config
    }
}
