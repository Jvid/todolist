const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')
const config = require('./config.js')

module.exports = {
  mode: 'development',
  entry: config.entry,
  output: {
    // path: path.join(__dirname,'/dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.web.js', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'stage-0', ['es2015', { modules: false }]]
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ],
          filename: "style.css"
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|gif|jpg|svg|jpeg)$/i,
        loader: "url-loader?limit=8192&name=static/[name].[hash:4].[ext]"
      },
      {
        test: /\.(md|string)$/i,
        loader: 'raw-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "initial"
        }
      }
    }
  },
  devServer: {
    open: true,
    stats: {
      colors: true
    },
    contentBase: __dirname,
    inline: true,
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'conclusion',
      template: 'index.tpl.html'
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}