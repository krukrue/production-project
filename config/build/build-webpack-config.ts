import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { buildResolvers } from "./build-resolvers";
import { buildPlugins } from "./build-plugins";
import { buildLoaders } from "./build-loader";
import { buildDevServer } from "./build-dev-server";

export function buildWebpackConfig (options: BuildOptions) : webpack.Configuration {
  const { mode } = options;
  const { paths } = options;
  const { isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options.paths),
    module: {
      rules: buildLoaders(options)
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options.port) : undefined

  }
}
