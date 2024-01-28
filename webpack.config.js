const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Furniture Mover',
      directory: path.resolve(__dirname, './public'),
    })
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
    static: {
      directory: path.resolve(__dirname, './public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-react'
            ],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
};
