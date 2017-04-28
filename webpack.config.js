var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: __dirname + '/client',
  // may need to change this
  entry: './js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
};
