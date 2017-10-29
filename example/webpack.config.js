const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['./index'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css?$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg?$/,
                loaders: 'url-loader?limit=10000',
            },
        ],
    },
    devServer:{
        contentBase: path.join(__dirname, 'build'),
        host: '0.0.0.0',
        stats: "errors-only",
        compress: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })
        ]

};