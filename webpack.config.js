const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './client/js/app.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(css|sass)$/,
        loaders: 'style-loader!css-loader!sass-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        query: { mimetype: 'image/png' },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
  //TODO: minify the code
  plugins: [new HtmlWebpackPlugin({ title: 'Lightbox',template: 'client/template.html'}),
            new UglifyJSPlugin({compress: true})
            ],
};
