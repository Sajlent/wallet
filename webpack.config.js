const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: true,
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'public'), // base path where to send compiled assets
        publicPath: '/', // base path where referenced files will be look for
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            '@': path.resolve(__dirname, 'src'), // shortcut to reference src folder from anywhere
        },
    },
    module: {
        rules: [
            {
                // config for es6 jsx
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: /\.[jt]sx?$/,
                use: ['babel-loader', '@svgr/webpack', 'url-loader'],
            },
            {
                // config for sass compilation
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(
                                    __dirname,
                                    'src/assets/styles/_globals.scss'
                                ),
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new Dotenv(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // plugin for inserting scripts into html
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            // plugin for controlling how compiled css will be outputted and named
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
    ],
};
