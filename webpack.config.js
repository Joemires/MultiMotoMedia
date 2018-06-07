const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    index: [ './index/index.ts', './index/index.scss' ]
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
    new HtmlWebpackPlugin({
      template: './index/index.pug',
      filename: 'index.html',
      chunks: [ 'index' ]
    })
  ],

  devServer: {
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
    open: true
  }
};