import { type Configuration } from 'webpack';
import { type WebpackPathsProps } from './types';

export function buildResolve(paths: WebpackPathsProps): Configuration['resolve'] {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      scss: paths.static.css
    }
  };
}
