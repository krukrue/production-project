import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  return [
    {
      test: /\.(js|tsx|ts|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            [
              'i18next-extract',
              {
                locales: ['en', 'ru'],
                keyAsDefaultValue: true
              }
            ]
          ]
        }
      }
    },
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        options.isDev ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resourcePath: string) => {
                return resourcePath.endsWith('.module.scss')
              },
              localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
            }
          }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|woff2)$/i,
      use: {
        loader: 'file-loader'
      }
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack']
    }

  ]
}
