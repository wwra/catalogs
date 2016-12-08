var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers           = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor'   : './src/vendor.ts',
        'app'      : './src/main.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module    : {
        loaders: [
            {
                test   : /\.ts$/,
                loaders: ['awesome-typescript']
            },
            {
                test  : /\.html$/,
                loader: "html"
            },
            {
                test  : /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test   : /\.css$/,
                exclude: helpers.root('src'),
                loader : ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test  : /\.css$/,
                 include: helpers.root('src'),
                loader: 'raw'
            },
            {
                test   : /\.scss$/,
                include: helpers.root('src'),
                loaders: ["raw", "sass"]
            }
        ]
    },
    htmlLoader: {
        minimize             : true,
        removeAttributeQuotes: false,
        caseSensitive        : true,
        customAttrSurround   : [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
        customAttrAssign     : [/\)?]?=/]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            $              : "jquery",
            jQuery         : "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
