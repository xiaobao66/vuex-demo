const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const root = path.resolve(__dirname, '..')

const babelConfig = {
    presets: ['env'],
    plugins: ['transform-runtime', 'transform-object-rest-spread']
}

module.exports = {
    context: root,
    entry: {
        state: './src/examples/state/index.js',
        getter: './src/examples/getter/index.js',
        mutation: './src/examples/mutation/index.js',
        action: './src/examples/action/index.js',
        module: './src/examples/module/index.js',
        'shopping-cart': './src/examples/shopping-cart/index.js'
    },
    output: {
        path: path.join(root, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: {
                            loader: 'babel-loader',
                            options: babelConfig
                        }
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: [
                    path.join(root, 'node_modules')
                ],
                loader: 'babel-loader',
                options: babelConfig
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
        }),
        new HtmlWebpackPlugin({
            filename: path.join(root, 'dist/mutation.html'),
            template: path.join(root, 'src/examples/mutation/index.html'),
            inject: 'body',
            chunks: ['mutation']
        }),
        new HtmlWebpackPlugin({
            filename: path.join(root, 'dist/action.html'),
            template: path.join(root, 'src/examples/action/index.html'),
            inject: 'body',
            chunks: ['action']
        }),
        new HtmlWebpackPlugin({
            filename: path.join(root, 'dist/module.html'),
            template: path.join(root, 'src/examples/module/index.html'),
            inject: 'body',
            chunks: ['module']
        }),
        new HtmlWebpackPlugin({
            filename: path.join(root, 'dist/shopping-cart.html'),
            template: path.join(root, 'src/examples/shopping-cart/index.html'),
            inject: 'body',
            chunks: ['shopping-cart']
        })
    ]
}