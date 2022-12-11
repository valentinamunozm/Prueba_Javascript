const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }), 
        new HtmlWebpackPlugin({
            filename: 'episode.html',
            template: './src/episode.html'
        }), 
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./",
        assetModuleFilename: 'assets/images/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },           {
                test: /\.html$/i,
                loader: "html-loader",
            }
        ]
    },    
    optimization: {
        minimize: true,
        minimizer: [ new OptimizeCssAssetsPlugin() ]
    }
}