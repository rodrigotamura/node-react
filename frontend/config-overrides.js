const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  // adding Babel's plugin
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
