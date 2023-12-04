interface WebpackStaticDirs {
  css: string;
}

export interface WebpackPathsProps {
  output: string;
  devServer: string;
  html: string;
  static: WebpackStaticDirs;
}

export interface WebpackConfigProps {
  paths: WebpackPathsProps;
  isProd: boolean;
  isDev: boolean;
  port?: number;
}
