const webpack = require('webpack');

module.exports = {
    entry: './app/scripts/wwwroot/index.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }
    ]
};