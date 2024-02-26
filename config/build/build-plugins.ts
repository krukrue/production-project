import { type BuildPath } from './types/config'
import webpack, { web } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins (paths: BuildPath): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: path.join('css/[name].[contenthash:8].css'),
      chunkFilename: path.join('css/[name].[contenthash:8].css')
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(process.env.NODE_ENV === 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
