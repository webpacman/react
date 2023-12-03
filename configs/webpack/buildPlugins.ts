import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type Configuration } from 'webpack';

export function buildPlugins(htmlPath: string, isProd: boolean): Configuration['plugins'] {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      title: 'Сайт визитка',
      template: htmlPath
    })
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin()
    );
  }

  return plugins;
}
