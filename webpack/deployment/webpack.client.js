const merge = require('webpack-merge');
const baseConfig = require('./webpack.prod.base');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const config = {
  entry: './src/client.js',
  output: {
    filename: 'main-bundle.js',
    path: path.resolve(__dirname, 'dist/public/scripts')
  },
  devtool: true,
  plugins: [new UglifyJSPlugin()],
  externals: {
    lodash: '_',
    jquery: '$'
  }
};

module.exports = merge(baseConfig, config);
