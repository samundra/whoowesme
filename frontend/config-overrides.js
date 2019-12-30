/* eslint-disable */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra')

function overrideExtra(config, env) {
  override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    // disable eslint in webpack
    disableEsLint(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {'@primary-color': '#1DA57A'},
    }),
  )(config, env)

  // Include source loader only on development version
  if (env === 'development') {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }

    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {injectDecorator: false},
        },
      ],
      exclude: [/node_modules/],
      enforce: 'pre',
    })
  }

  return config
}

module.exports = overrideExtra
