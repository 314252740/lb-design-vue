const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ClearWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    "examples": '../examples/main.ts'
  },

  output: {
    filename: '[name].[content].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        options: {
          transpileOnly: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'sass-loader', 'css-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/i,
        type: 'asset/resource',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({}),
    new ClearWebpackPlugin()
  ]
}
