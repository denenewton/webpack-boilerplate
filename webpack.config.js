
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { join } = require('path');

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path:  join(__dirname, 'public')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css", //arquivo de saida para aplicaçao.
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
      }),
      new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //"style-loader", // Adiciona CSS injetando dentro da DOM.
          "css-loader", // interpreta @inport, url() ....
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/',
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    port:8080,
    contentBase: join(__dirname,'public'),
    liveReload:true,
   
  },
};