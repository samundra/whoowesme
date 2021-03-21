// const overrideExtra = require('../config-overrides')
const path = require('path')

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    // '@storybook/preset-typescript',
    '@storybook/addon-docs/preset',
    '@storybook/addon-actions/register',
    // '@storybook/addon-notes/register-panel',
    '@storybook/addon-storysource/register',
  ],
  webpackFinal: async (config, { configType }) => {
    const srcDir = path.resolve(__dirname, '..', 'src')
    const nodeModules = path.resolve(__dirname, '..', 'node_modules')

    config.resolve.modules = [...(config.resolve.modules || []), srcDir, nodeModules]

    return config
  },
}
