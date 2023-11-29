const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//console.debug(process.env.NODE_ENV);

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'inline-source-map',
    entry: './src/index.tsx',
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    devServer: {
      static: './build',
      hot: true,
      port: 3000,
      open: {
        app: {
          name: 'Google Chrome',
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'Сайт визитка',
      template: './public/index.html',
    })],
  }
};