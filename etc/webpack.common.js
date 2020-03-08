const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "../src/client/index.tsx")
  },
  resolve: {
    alias: {
      src: path.join(__dirname, "../src")
    },
    extensions: [".mjs", ".ts", ".tsx", ".js", ".json"]
  },
  loaderTs: {
    test: /\.tsx?$/,
    include: path.resolve(__dirname, "../src"),
    loader: "awesome-typescript-loader"
  },
  loaderMjs: {
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  },
  loaderCss: {
    test: /\.css?$/,
    include: /node_modules/,
    loaders: ["style-loader", "css-loader"]
  },
  loaderJson: {
    test: /\.json$/,
    loader: "json-loader"
  }
};
