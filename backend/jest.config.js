const { defaults } = require('jest-config')

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  rootDir: './src',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
}
