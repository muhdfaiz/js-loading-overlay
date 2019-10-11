const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool: "source-map",
    target: "async-node",
    entry: ["./src/loading-overlay.js"],
    output: {
        filename: "dist/loading-overlay.js",
        path: path.resolve(__dirname, '')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    extractComments: 'all',
                    compress: {
                        drop_console: true,
                    },
                    output: {
                        comments: false,
                    },
                }
            }),
        ],
    }
};