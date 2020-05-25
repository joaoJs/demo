const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      entry: {
        index: [
          './src'
        ]
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: "babel-loader"
              }
            ]
          },
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }
            ]
          },
          {
            test: /\.(png|gif|webp|webm|mp4)$/i,
            exclude: /node_modules/,
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name].[ext]'
            }
          },
        ]
      },
      output: {
        filename: "bundle.js"
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
          chunks: ['index']
        }),
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};