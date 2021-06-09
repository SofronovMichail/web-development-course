const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: 'blocking',
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'todo-app.min.css',
    }),
  ],
  entry: './src/todo-app.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'todo-app.min.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
