const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const env = process.env.NODE_ENV;

const config = {
    mode: env || 'development'
};

module.exports = (env, options) => {
    return {
        devtool: "source-map",
        target: "async-node",
        entry: ["./src/js-loading-overlay.js"],
        output: {
            filename: options.mode == 'development' ? "dist/js-loading-overlay.js" : "dist/js-loading-overlay.min.js",
            path: path.resolve(__dirname, ''),
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
    }
};