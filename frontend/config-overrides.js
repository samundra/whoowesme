/* eslint-disable */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const rewireCreateReactLibrary = require('react-app-rewire-create-react-library')

function overrideExtra(config, env) {
  config = rewireCreateReactLibrary(config, env)
  // Add MiniCssExtractPlugin
  // Fix bug in react-app-rewired see https://github.com/timarney/react-app-rewired/issues/320#issuecomment-429182998
  if (env === 'production') {
    // Add the MiniCssExtractPlugin back into the plugins array as it is _required_ for CRA 2.
    config.plugins.push(
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),
    )
  }

  override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
      },
    }),
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    // // disable eslint in webpack
    disableEsLint(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
  )(config, env)

  // Include source loader only on development version
  if (env === 'development') {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }

    config.module.rules.push({
      test: /\.(stories)\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { injectDecorator: false },
        },
      ],
      exclude: [/node_modules/],
      enforce: 'pre',
    })
  }

  return config
}

module.exports = overrideExtra
