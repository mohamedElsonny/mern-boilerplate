import express from 'express'
import path from 'path'

const server = express()

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const config = require('../../config/webpack.dev.js')
  const compiler = webpack(config)

  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer
  )
  const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)

  // order is DevMiddleware -> HotMiddleware -> StaticMiddleware [TRICK]
  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddleware)
}
server.use(express.static('dist'))

server.listen(8080, () => {
  console.log('Server is listening')
})
