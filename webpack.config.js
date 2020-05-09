const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.[hash].js",
    // contentBase: path.join(__dirname, "static"),
  },
  // experiments: {
  //   asset: true,
  // },
  devServer: {
    noInfo: true,
    quiet: true,
  },
  module: {
    rules: [
      // hmmmm 可能用得上
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:3212"],
        notes: ["Fuck u"],
      },
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
