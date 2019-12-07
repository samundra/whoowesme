const { override, fixBabelImports } = require('customize-cra');

function overrideExtra(config, env) {
  override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    })
  )(config, env);

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };

  return config;
}

module.exports = overrideExtra;
