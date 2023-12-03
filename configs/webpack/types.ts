export interface WebpackPathsProps {
  output: string;
  devServer: string;
  html: string;
}

export interface WebpackConfigProps {
  paths: WebpackPathsProps;
  isProd: boolean;
  isDev: boolean;
  port?: number;
}
