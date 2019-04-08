'use strict';

const paths = require('./paths');
const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  entry: paths.appIndexFile,
  devtool: env === 'local' ? 'inline-source-map' : 'source-map',
  mode: env === 'local' ? 'development' : 'production',
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '~src': paths.appSrc,
      '~root': paths.appRoot,
    },
  },
  output: {
    path: paths.appBuild,
    publicPath: '/',
    library: 'typescriptStarter',
    filename: 'typescriptStarter.js',
  },
  plugins: [
    new CleanWebpackPlugin([paths.appBuild], { root: paths.appRoot }),
    env === 'local'
      ? new HtmlWebpackPlugin({ inject: 'body', template: paths.appHtmlIndexFile })
      : new CompressionPlugin({ test: /\.js$/ }),
  ],
});
