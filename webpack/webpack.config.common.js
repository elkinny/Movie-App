const path = require('path');
const webpack = require('webpack');

const isDevMod = process.env.NODE_ENV === 'development';

const srcPath = path.resolve('./client/src');
const nodeModulesPath = path.resolve('./node_modules');

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [nodeModulesPath, srcPath],
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
    ],
  },

  plugins: [isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin()],
};
