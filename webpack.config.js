//webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
  rules: [{
   test: /.jsx?$/,
   use: {
       loader:'babel-loader'
   },
   exclude: /node_modules/
  },
  {
   test: /\.css$/,
   use: ['style-loader', 'css-loader']
  }]
 }
}