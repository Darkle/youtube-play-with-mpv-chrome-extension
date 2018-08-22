const path = require('path')

const webpack = require('webpack')

const projectDir = path.resolve(__dirname)
const mainAppEntryPoint = path.join(projectDir, 'appMain.lsc')
const ISDEV = process.env.NODE_ENV !== 'production'

console.log('ISDEV: ', ISDEV)
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

const webpackOptions = {
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: mainAppEntryPoint,
  output: {
    filename: 'appMain-compiled.js',
    path: projectDir
  },
  devtool: ISDEV ? 'source-map' : 'none',
  context: projectDir,
  module: {
    rules: [
      {
        test: /.lsc/,
        exclude: [
          /(node_modules)/
        ],
        loader: 'babel-loader',
        options: {
          sourceMap: ISDEV
        }
      },
    ]
  },
  resolve: {
    extensions: ['.lsc', '.js']
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.DefinePlugin({ ISDEV }),
  ]
}

module.exports = webpackOptions
