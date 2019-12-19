const path = require('path');

module.exports = {
  output: {
    filename: 'main-bundle.js',
    path: path.resolve(__dirname, 'build/public/scripts')
  }
};
