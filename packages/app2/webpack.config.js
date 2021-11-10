const { resolve } = require('path')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, './index.js'),
  output: {
    filename: 'app2.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
