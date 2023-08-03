const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    main: './src/mainPage.js',
    menu: './src/menuPage.js',
    contact: './src/contactPage.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development'
};