const path = require('path')

const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack');

const projectDir = path.resolve(__dirname)
const srcFolder = path.join(projectDir, 'src')
const buildFolder = path.join(projectDir, 'build')
const manifestFile = path.join(srcFolder, 'manifest.json')
const iconFile = path.join(srcFolder, 'images', 'mpv-logo-128.png')
const optionsHtmlFile = path.join(srcFolder, 'options', 'options.html')
const optionsJSFile = path.join(srcFolder, 'options', 'options.lsc')
const jQueryJSFile = path.join(srcFolder, 'options', 'jquery-3.3.1.min.js')
const nouisliderJSFile = path.join(srcFolder, 'options', 'noUiSlider', 'nouislider.js')
const materializeJSFile = path.join(srcFolder, 'options', 'materialize', 'js', 'materialize.js')
const popupHtmlFile = path.join(srcFolder, 'popup', 'popup.html')
const popupJSFile = path.join(srcFolder, 'popup', 'popup.lsc')
const backgroundEntryPoint = path.join(srcFolder, 'background', 'backgroundMain.lsc')
const ytContentScriptEntryPoint = path.join(srcFolder, 'content-scripts', 'youtube', 'youtube.lsc')
const ytEmbedsContentScript = path.join(srcFolder, 'content-scripts', 'youtube', 'youtube-embeds.lsc')
const allSitesScriptEntryPoint = path.join(srcFolder, 'content-scripts', 'all-sites.lsc')
const ISDEV = process.env.NODE_ENV !== 'production'

console.log('ISDEV: ', ISDEV)
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

const webpackOptions = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: {
    background: backgroundEntryPoint,
    'youtube-content-script': ytContentScriptEntryPoint,
    'youtube-embeds-content-script': ytEmbedsContentScript,
    'all-sites-content-script': allSitesScriptEntryPoint,
    options: optionsJSFile,
    popup: popupJSFile
  },
  output: {
    filename: '[name].js',
    path: buildFolder
  },
  devtool: ISDEV ? 'source-map' : 'none',
  context: projectDir,
  module: {
    rules: [
      {
        test: /.lsc$/,
        exclude: [
          /(node_modules)/
        ],
        loader: 'babel-loader',
        options: {
          sourceMap: ISDEV
        }
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.lsc', '.js']
  },
  optimization: {
    minimize: !ISDEV
  },
  plugins: [
    new webpack.DefinePlugin({ ISDEV }),
    new Dotenv(),
    new CleanWebpackPlugin(buildFolder),
    new CopyPlugin([
      { from: manifestFile, to: path.join(buildFolder, 'manifest.json') },
      { from: optionsHtmlFile, to: path.join(buildFolder, 'options.html') },
      { from: popupHtmlFile, to: path.join(buildFolder, 'popup.html') },
      { from: iconFile, to: path.join(buildFolder, 'mpv-logo-128.png') },
      { from: jQueryJSFile, to: path.join(buildFolder, 'jquery-3.3.1.min.js') },
      { from: materializeJSFile, to: path.join(buildFolder, 'materialize.js') },
      { from: nouisliderJSFile, to: path.join(buildFolder, 'nouislider.js') },
    ]),
  ]
}

module.exports = webpackOptions
