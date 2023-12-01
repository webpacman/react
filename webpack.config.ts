import path from 'path';
import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import 'webpack-dev-server';

interface EnvProps {
  production?: boolean;
}

module.exports = (env: EnvProps): webpack.Configuration => {
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
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            env.production ? MiniCssExtractPlugin.loader : "style-loader",
            {
              "loader": "css-loader",
              options: {
                modules: true
              }
            },
            "sass-loader",
          ],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Сайт визитка',
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
  }
};