var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'App'),
    resolve: {
        extensions: ['.js']
        // alias: {
        //     'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
        // }
    },
    entry: {
        app: './main.js'
    },
    output: {
        path: path.join(basePath, 'www'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?name=/public/font/[name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?name=/public/font/[name].[ext]&limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=/public/font/[name].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?name=/public/svg/[name].[ext]&limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: "file-loader?name=/public/icons/[name].[ext]"
            }
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: 'index.html', //Name of file in ./dist/
        //     template: 'index.html', //Name of template in ./src
        //     hash: true,
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest'],
        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            'jquery-ui': 'jquery-ui',
        })
    ],
};