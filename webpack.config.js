var path = require("path");
var webpack = require("webpack");


var devPlugins = []; // if using any plugins for development



module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,

        use: [{
          loader: 'babel-loader',

          options: {
            presets: ['es2015', 'react'],
          }
        }]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
