import { type Configuration } from 'webpack';

export function buildDevServer(staticPath: string, port: number): Configuration['devServer'] {
  return {
    static: staticPath,
    hot: true,
    port,
    open: {
      app: {
        name: 'Google Chrome'
      }
    }
  };
}
