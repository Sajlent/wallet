const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'public'), // base path where to send compiled assets
        publicPath: '/' // base path where referenced files will be look for
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [ path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            '@': path.resolve(__dirname, 'src') // shortcut to reference src folder from anywhere
        }
    },
    module: {
        rules: [
            { // config for es6 jsx
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            { // config for sass compilation
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(__dirname, 'src/assets/styles/_globals.scss')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            { // config for images
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // plugin for inserting scripts into html
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        })
    ]
};