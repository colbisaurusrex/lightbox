module.exports = {
  context: __dirname + '/client',
  //may need to change this
  entry: './app.js',
  output: {
    path: __dirname+ '/client',
    filename: 'bundle.js'
  }
}
