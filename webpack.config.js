var path = require("path");
module.exports = {
  entry: {
    app: ["./dist/js/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist/js/"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        test: /\.js$/,
        include: path.resolve(__dirname, './dist/js/'),
        loader: 'babel',
        query: {
          presets: ['es2016']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devServer: {
    port: 8080,
    compress: true,
    stats: 'errors-only',
    open: true
  }
};
