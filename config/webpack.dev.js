var webpackMerge      = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig      = require('./webpack.common.js');
var helpers           = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval',

    output: {
        path         : helpers.root('dist'),
        publicPath   : 'http://localhost:8080/',
        filename     : '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats             : 'minimal',
        port              : 8080,
        inline            : true
    }
});
