module.exports = {
  entry: [
    'babel-polyfill',
    './src/client/client.jsx'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}