const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: [ './app.ts', './app.scss' ],
    index: [ './pages/index/index.ts', './pages/index/index.scss' ],
    ducati: [ './pages/ducati/ducati.ts', './pages/ducati/ducati.scss' ],
    kawasaki: [ './pages/kawasaki/kawasaki.ts', './pages/kawasaki/kawasaki.scss' ],
    yamaha: [ './pages/yamaha/yamaha.ts', './pages/yamaha/yamaha.scss' ],
    gallery: [ './pages/gallery/gallery.ts', './pages/gallery/gallery.scss' ],
    vod: [ './pages/vod/vod.ts', './pages/vod/vod.scss' ],
    motogp: [ './pages/motogp/motogp.ts', './pages/motogp/motogp.scss' ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader?url=false', 'sass-loader' ]
        })
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js'
  },

  plugins: [
    new ExtractTextPlugin('./[name]/[name].css'),

    new ConcatPlugin({
      uglify: true,
      name: 'vendor',
      injectType: 'prepend',
      outputPath: 'core/',
      filesToConcat: [
        'jquery',
        'moment',
        'nouislider',
        'eonasdan-bootstrap-datetimepicker',
        'material-kit/assets/js/core/popper.min.js',
        'material-kit/assets/js/bootstrap-material-design.js',
        'material-kit/assets/js/material-kit.js'
      ]

    }),

    new HtmlWebpackPlugin({
      template: './pages/index/index.pug',
      filename: 'index.html',
      chunks: [ 'app', 'index' ],
      chunksSortMode: 'manual'
    }),
    new HtmlWebpackPlugin({
      template: './pages/ducati/ducati.pug',
      filename: 'ducati.html',
      chunks: [ 'app', 'ducati' ],
      chunksSortMode: 'manual'
    }),
    new HtmlWebpackPlugin({
      template: './pages/kawasaki/kawasaki.pug',
      filename: 'kawasaki.html',
      chunks: [ 'app', 'kawasaki' ],
      chunksSortMode: 'manual'
    }),
    new HtmlWebpackPlugin({
      template: './pages/yamaha/yamaha.pug',
      filename: 'yamaha.html',
      chunks: [ 'app', 'yamaha' ],
      chunksSortMode: 'manual'
    }),
    new HtmlWebpackPlugin({
      template: './pages/gallery/gallery.pug',
      filename: 'gallery.html',
      chunks: [ 'app', 'gallery' ],
      chunksSortMode: 'manual'
    }),
    new HtmlWebpackPlugin({
      template: './pages/vod/vod.pug',
      filename: 'vod.html',
      chunks: [ 'app', 'vod' ],
      chunksSortMode: 'manual'
    }),
    new HtmlWebpackPlugin({
      template: './pages/motogp/motogp.pug',
      filename: 'motogp.html',
      chunks: [ 'app', 'motogp' ],
      chunksSortMode: 'manual'
    }),
    
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' }
    ])
  ],

  devServer: {
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
    open: true
  }
};