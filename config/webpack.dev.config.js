const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const root = path.resolve(__dirname, '..')

module.exports = {
    context: root,
    entry: {
        state: './src/examples/state/index.js',
        getter: './src/examples/getter/index.js'
    },
    output: {
        path: path.join(root, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: [
                    path.join(root, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['*', '.js', '.vue']
    },
    devServer: {
        port: 8889,
        inline: true,
        hot: true,
        quiet: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: path.join(root, 'dist/state.html'),
            template: path.join(root, 'src/examples/state/index.html'),
            inject: 'body',
            chunks: ['state']
        }),
        new HtmlWebpackPlugin({
            filename: path.join(root, 'dist/getter.html'),
            template: path.join(root, 'src/examples/getter/index.html'),
            inject: 'body',
            chunks: ['getter']
        })
    ]
}