const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: [
      '@babel/runtime/regenerator',
      'webpack-hot-middleware/client?reload=true',
      './src/client/index.js'
    ]
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    hotUpdateChunkFilename: '.hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: '.hot/[hash].hot-update.json'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true,
    open: true,
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },

      {
        test: /\.(jpg|git|png)$/,
        use: [
          { loader: 'file-loader', options: { name: 'images/[name].[ext]' } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}
