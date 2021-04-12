const { defaults } = require('jest-config')

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
