import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { buildDevServer } from './buildDevServer';
import { buildModule } from './buildModule';
import { buildOutput } from './buildOutput';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { type WebpackConfigProps } from './types';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export const buildWebpackConfig = ({ isDev, isProd, port = 3000, paths }: WebpackConfigProps): Configuration => {
  const webpackConfig: Configuration = {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'inline-source-map',
    entry: './src/index.tsx',
    output: buildOutput(paths.output),
    resolve: buildResolve(paths),
    module: buildModule(paths, isProd),
    plugins: buildPlugins(paths.html, isProd)
  };

  if (isDev) {
    webpackConfig.devServer = buildDevServer(paths.devServer, port);
  }

  return webpackConfig;
}
