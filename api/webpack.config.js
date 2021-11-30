/* eslint-disable */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
/* eslint-enable */

const mode = slsw.lib.webpack.isLocal ? 'development' : 'production'
const plugins = [new webpack.ContextReplacementPlugin(/require_optional/)]

module.exports = {
  mode,
  devtool: 'source-map',
  entry: slsw.lib.entries,
  target: 'node',
  node: {
    __dirname: true,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externals: [
    nodeExternals(
      { path: path.join(__dirname, '../node_modules') },
      { path: path.join(__dirname, './node_modules/') }
    ),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/, /.test.ts/],
        loader: 'ts-loader',
      },
    ],
  },
  plugins,
}
