const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: 'development',    //development environment, production mode
    devtool: "inline-source-map",
    devServer: {
        static: "../dist",
        hot: true
    },
    optimization: {
        minimize: true
    }
});
