const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const compiler = webpack(config)
var server = new webpackDevServer(compiler, {
  quiet: false,
  stats: { colors: true },
  proxy: {
    '*': 'http://localhost:3000'
  }
});
server.listen(8080)