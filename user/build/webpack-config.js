const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Adjust the entry point if necessary
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "child_process": false, // child_process cannot be polyfilled in the browser
      "util": require.resolve("util/"),
      "os": require.resolve("os-browserify/browser")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // Add other loaders as needed
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Adjust the path to your HTML template
    })
  ],
  // Add other configurations like devServer if needed
};
