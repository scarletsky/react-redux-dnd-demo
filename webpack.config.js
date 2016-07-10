var path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  resolve: {
    root: path.resolve(__dirname, 'client'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
