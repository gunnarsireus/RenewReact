var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: {vendor: './vendor.js',
            startRouter: './startRouter.js'
    },
    output: {
        path: path.join(__dirname, 'Built'),
        filename: '[name].entry.chunk.js'
    },
    plugins: [
        new CommonsChunkPlugin("commons.chunk.js"),
        new WebpackNotifierPlugin()
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.eot$/, loader: "url" },
            { test: /\.html$/, loader: "html" },
            { test: /\.js$/, loader: "babel"}
        ]
    }
    
};
