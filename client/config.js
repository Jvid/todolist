const path = require('path')
exports.entry = {
  vendors: ['react', 'react-dom', 'react-router'],
  app: path.resolve('./index.js'),
}