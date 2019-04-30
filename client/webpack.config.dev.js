/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');
const srcPath = path.resolve('./client/src');
const nodeModulesPath = path.resolve('./node_modules');

module.exports = {
  context: srcPath,
  name: 'client',
  mode: 'development',
  entry: './index.js',
  output: {
    path: outputPath,
    filename: 'index.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  watch: true,
  devServer: {
    historyApiFallback: true,
    contentBase: outputPath,
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [nodeModulesPath, srcPath],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html'),
      favicon: path.join(__dirname, '/public/favicon.ico'),
      title: 'MovieApp',
    }),
  ],
};
