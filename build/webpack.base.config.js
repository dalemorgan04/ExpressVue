const path = require('path')

const config = {
    entry: {
        app: path.resolve(__dirname, '../src/client-entry.js')
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            'bootstrap-vue$': 'bootstrap-vue/src/index.js'
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /(\.js$)|(\.vue$)/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    fix: true
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    css: 'css-loader',
                    'scss': 'css-loader|sass-loader'
                }
            },
            {
                test: /\.(s*)css/,
                use: ['css-loader','sass-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'assets/js/[name].js'
    },
    mode: 'development'
}

module.exports = config
