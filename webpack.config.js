"use strict"
const { resolve } = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const LiveReloadPlugin = require("webpack-livereload-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const { DefinePlugin } = require("webpack")

let devtool, filename, mode

let plugins = [
  new CopyWebpackPlugin([
    { from: "./src/assets/img", to: "img" },
  ]),
  new HtmlWebpackPlugin({
    template: "./src/assets/index.html",
    title: "Roames Pipe Inspection"
  })
]

if (process.env.NODE_ENV !== "production") {
  devtool = "inline-source-map"
  filename = "[name].js"
  mode = "development"
  plugins.push(
    new LiveReloadPlugin({
      appendScriptTag: true,
    })
  )
} else {
  filename = "[name].[contenthash].js"
  mode = "production"
  plugins.push(
    new OptimizeCSSAssetsPlugin({})
  )
}

plugins.push(
  new MiniCssExtractPlugin({
    filename: filename.replace("[name]", "styles").replace(".js", ".css"),
  })
)

module.exports = {
  name: "app",
  mode,
  entry: {
    bundle: resolve(__dirname, "./src/app/main.tsx")
  },
  output: {
    filename,
    path: resolve(__dirname, "./build")
  },
  devtool,
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  node: {
    fs: "empty",
    tls: "empty"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: "initial",
          enforce: true,
          filename,
          name: "vendors",
          priority: 10,
          test: /node_modules/
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader?configFileName=./tsconfig.json"
      },
      {
        test: /\.css$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]-[local]-[hash:base64:5]"
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: plugins.concat(
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    })
  )
}
