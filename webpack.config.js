const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "/src/js/index.js",
    mode: "development",
    output: {
      path: path.resolve(__dirname, '/dist'),
      filename: 'build.js',
      publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    module: {
        rules: [ 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "/src/pages/index.html"),
            inject: 'body'
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '/src/pages'),
        open: true,
        compress: true,
        port: 8080,
    } 
  };