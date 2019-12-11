const { override, fixBabelImports } = require('customize-cra');
const path = require('path');
// const storysource = require.resolve('@storybook/addon-storysource/loader');
const storysource = require.resolve('@storybook/source-loader');

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

  config.module.rules.push({
    // test: /\.stories\.jsx?$/,
    test: /\.(stories|story)\.[tj]sx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { injectDecorator: false },
      },
    ],
    exclude: [/node_modules/],
    enforce: 'pre',
  });

  return config;
}

module.exports = overrideExtra;
