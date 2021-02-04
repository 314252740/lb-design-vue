const path = require('path')

module.exports = {
  entry: {
    "examples": '../examples/main.ts'
  },
  devtool: 'inline-source-map',

  output: {

  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugin: {

  }
}
