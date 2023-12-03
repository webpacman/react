import { type Configuration } from 'webpack';

export function buildResolve(): Configuration['resolve'] {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  };
}
