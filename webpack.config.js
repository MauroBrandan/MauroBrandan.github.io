const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000,
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin (
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new CopyWebpackPlugin ({
            patterns: [{ from: './src/styles/styles.css',
                to: '' }],
        })
    ]
}