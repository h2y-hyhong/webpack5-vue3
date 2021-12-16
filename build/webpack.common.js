const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");


module.exports = {
    mode: 'development',    //development environment, production mode
    entry: './src/index.js',    //Import file
    output: {
        filename: '[name].[contenthash].js',    // output file
        path: path.resolve(__dirname, '../dist'),  // Storage address of output file
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: "asset"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.ts', '.js', '.jsx', '.json'],    //It means that the file suffix can not be written in the import file
        alias: {
            '@': path.join(__dirname, 'src')    //When the import file is in src, it can be written as @ / component /
        }
    },
    optimization: {
        moduleIds: "deterministic",
        // use optimization.runtimeChunk  Option to split the runtime code into a separate chunk
        runtimeChunk: "single",
        splitChunks: {
            // Using the client's long-term caching mechanism, hit the cache to eliminate requests and reduce getting resources from the server,
            // At the same time, it can ensure that the client code and server code version are consistent. This can be done by
            // Use the cacheGroups option of the SplitChunksPlugin plug-in.
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        minimizer: [
            new CssMinimizerPlugin({
                parallel: true      // Using multi process concurrent execution to improve the construction speed
            })
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "I am webpack.config Configured title",
            template: "./public/index.html",
            //Compress HTML
            minify: {
                removeComments: true,       //Remove Comments form HTML
                collapseWhitespace: true        //Remove whitespace and newline
            }
        })
    ],
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true
            }
        }
    },
    devtool: "inline-source-map",       //Add a line here
};
