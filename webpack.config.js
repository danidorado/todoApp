const HtmlWebpackPlugin = require('html-webpack-plugin');
const CSSWebpackPlugin  = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin        = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    optimization:{
        minimizer:[ new OptimizeCssPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /global\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /global\.css$/i,
                use: [CSSWebpackPlugin.loader,'css-loader'],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false, 
                    minimize: false,
                    },    
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        }),
        new CSSWebpackPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ],
        }),
    ],
}