import path from 'path';
import type { Configuration } from 'webpack';
import { buildWebpackConfig } from './configs/webpack/buildWebpackConfig';

interface EnvProps {
  production?: boolean;
}

module.exports = ({ production = false }: EnvProps): Configuration => buildWebpackConfig({
  paths: {
    output: path.resolve(__dirname, 'build'),
    devServer: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    static: {
      css: path.resolve(__dirname, 'static', 'css')
    }
  },
  isProd: Boolean(production),
  isDev: !production
});
