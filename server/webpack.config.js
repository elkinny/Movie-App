const path = require('path');
const nodeExternals = require('webpack-node-externals');

const srcClientPath = path.resolve('./client/src');
const nodeModulesPath = path.resolve('./node_modules');

module.exports = {
  mode: process.env.NODE_ENV,
  name: 'server',
  target: 'node',
  entry: './server/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: '[name].js',
    path: path.resolve('./src'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [nodeModulesPath, srcClientPath],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: /src/,
        use: [
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
};
