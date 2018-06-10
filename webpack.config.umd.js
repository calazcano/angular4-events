const path = require('path');
// Webpack and its plugins
//const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CompressionPlugin = require('compression-webpack-plugin');
//const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
//const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV = 'production';

const metadata = {
  env: ENV
};
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'main': './src/index.ts'
  },
  externals: {
    '@angular/core': {
      root: ['ng', 'core'],
      commonjs: '@angular/core',
      commonjs2: '@angular/core',
      amd: '@angular/core'
    },
    '@angular/common': {
      root: ['ng', 'common'],
      commonjs: '@angular/common',
      commonjs2: '@angular/common',
      amd: '@angular/common'
    },
    '@angular/platform-browser': {
      root: ['ng', 'platformBrowser'],
      commonjs: '@angular/platform-browser',
      commonjs2: '@angular/platform-browser',
      amd: '@angular/platform-browser'
    },
    'rxjs/Subscription': {
      root: ['rx', 'Subscription'],
      commonjs: 'rxjs/Subscription',
      commonjs2: 'rxjs/Subscription',
      amd: 'rxjs/Subscription'
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', query: { compilerOptions: { noEmit: false } } }
    ]
  },
  output: {
    path: '/Users/qlig/git/angular4-events/dist/umd',
    filename: 'angular2-pubsub.js',
    libraryTarget: 'umd',
    library: 'angular2-pubsub'
  },
  plugins: [
    new CompressionPlugin({ regExp: /\.css$|\.html$|\.js$|\.map$/ })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'node_modules')]
  }
};