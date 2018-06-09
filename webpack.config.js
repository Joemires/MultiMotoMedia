const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: [ './app.ts', './app.scss' ],
    index: [ './pages/index/index.ts', './pages/index/index.scss' ]
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
          use: [ 'css-loader', 'sass-loader' ]
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