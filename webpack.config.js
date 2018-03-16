require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'eslint-loader',
      },
    ],
  },
};

module.exports = config;
