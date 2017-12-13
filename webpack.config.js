var webpack = require('webpack')
var path = require('path')

var plugins = []
var loaders = []

var config = {
  entry: {
    IWT: __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].min.js',
  },
  externals: {
    'jquery': 'jQuery',
    '$': 'jQuery',
  },
  module: {
    rules: [...loaders, {
      test: /(\.jsx|\.js)$/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: plugins
}

module.exports = config
