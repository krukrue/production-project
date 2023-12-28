import webpack from 'webpack';
import path from "path";
import { buildWebpackConfig } from "./config/build/build-webpack-config";
import { BuildEnv } from "./config/build/types/config";

const mode = 'development';
const isDev = mode === 'development';
const PORT = 4000;



export default (env: BuildEnv) => {

  const mode = env.mode || 'development';
  const port = env.port || PORT;

  return buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html')
    },
    isDev,
    port,
  })
};