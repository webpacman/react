import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type Configuration } from 'webpack';
import { type WebpackPathsProps } from './types';

export function buildModule(paths: WebpackPathsProps, isProd: boolean): Configuration['module'] {
  return {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "${paths.static.css}/base.scss";`,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  };
}
