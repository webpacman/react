import { type Configuration } from 'webpack';

export function buildOutput(outputPath: string): Configuration['output'] {
  return {
    filename: '[name].[contenthash].bundle.js',
    path: outputPath,
    clean: true,
  };
}
