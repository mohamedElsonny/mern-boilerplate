import express from 'express'
import path from 'path'

const server = express()

// webpack configuration for Development React
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

// your routes here

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})
