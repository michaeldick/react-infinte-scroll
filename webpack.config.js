var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: ['./src/app.js', './src/app.less'],
  output: { path: './src/public/', filename: 'app.packed.js' },
  watchOptions: { poll: 500, aggregateTimeout: 1000 },
  module : {
    loaders : [
      { test : /\.js?/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react', 'stage-2'] } },
      { test: /\.json$/, exclude: /node_modules/, loader: 'json' },
      { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
    ]
  },
  plugins: [ new ExtractTextPlugin("app.packed.css", { allChunks: true }) ]
};

module.exports = config;
