const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vuex-viewport.js',
    library: 'vuexViewport',
    libraryTarget: 'umd'
  }
};
