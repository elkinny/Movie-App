const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.join(__dirname, '/src'),
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    port: 3000,
    open: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
                sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.join(__dirname, '/public/index.html'),
      favicon:  path.join(__dirname, '/public/favicon.ico'),
      title: 'MovieApp'
    })
  ]
};