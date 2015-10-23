/*eslint-env node*/
'use strict';

var config = function () {
    return {
        entry: {
            app: './src/index.js'
        },
        output: {
            path: __dirname + '/bundle',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: [/node_modules/]
                },
                {
                    test: /\.png$/,
                    loader: 'url-loader?limit=100000'
                },
                {
                    test: /\.(woff2?|eot|ttf|svg)(\?.*$|$)/,
                    loader: 'file-loader'
                }
            ]
        },
        devtool: 'inline-source-map',
        devServer: {
            inline: true
        }
    };
};
module.exports = config();
