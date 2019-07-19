// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

const srcPath = path.resolve('./client/src');
const nodeModulesPath = path.resolve('./node_modules');

module.exports = {
  plugins: [
    // your custom plugins
  ],
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
};
