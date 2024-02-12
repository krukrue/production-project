import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(port: number) : DevServerConfiguration {
  return {
    port: 4000,
    open: true,
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: true
    },
  }
}