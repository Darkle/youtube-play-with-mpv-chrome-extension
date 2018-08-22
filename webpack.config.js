const path = require('path')

const webpack = require('webpack')

const projectDir = path.resolve(__dirname)
const jsFolder = path.join(projectDir, 'src', 'js')
const jsSrcFolder = path.join(jsFolder, 'src')
const jsBuildFolder = path.join(jsFolder, 'build')
const mainEntryPoint = path.join(jsSrcFolder, 'main.lsc')
const ISDEV = process.env.NODE_ENV !== 'production'

console.log('ISDEV: ', ISDEV)
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

const webpackOptions = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: mainEntryPoint,
  output: {
    filename: 'main-compiled.js',
    path: jsBuildFolder
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
