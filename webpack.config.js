var path = require('path');
module.exports = {
  entry: {
  	app: ['./dist/js/app.js']
  },
  output: {
  	path: path.join(__dirname, './dist/js'),
    filename: 'bundle.js'
  },
  devServer: {
  	https: true,
  	port: 8080
  }
};
