var webpack           = require('webpack');
var webpackMerge      = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig      = require('./webpack.common.js');
var helpers           = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-source-map',

    output: {
        path         : helpers.root('dist'),
        publicPath   : './',
        filename     : '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false
    },

    plugins: [
        //new webpack.optimize.UglifyJsPlugin({
        //    minimize : false,
        //    compress : {
        //        warnings: false
        //    },
        //    sourceMap: false,
        //    mangle   : {
        //        except: ['$super', '$', 'exports', 'require']
        //    }
        //}),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
        new ExtractTextPlugin('[name].[hash].css'),

    ]
});
