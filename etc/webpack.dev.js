const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const config = require("../config");
const common = require("./webpack.common");

module.exports = {
  entry: common.entry,
  output: {
    path: path.resolve(__dirname, "../.tmp"),
    publicPath: "/",
    filename: "[name].js"
  },
  resolve: common.resolve,
  module: {
    rules: [common.loaderMjs, common.loaderTs, common.loaderCss, common.loaderJson]
  },
  devtool: "cheap-module-eval-source-map",
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      config
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: path.resolve(__dirname, "../src/client"),
      tsconfig: path.resolve(__dirname, "../tsconfig.json"),
      tslint: path.resolve(__dirname, "../tslint.json")
    })
  ],
  devServer: {
    contentBase: ".tmp/static/",
    port: process.env.PORT,
    historyApiFallback: true
  }
};
