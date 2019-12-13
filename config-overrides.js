const { override, fixBabelImports, addLessLoader } = require('customize-cra');

function overrideExtra(config, env) {
  override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    })
  )(config, env);

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };

  config.module.rules.push({
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
