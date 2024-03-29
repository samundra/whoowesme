module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    strict: ['error', 'never'],
    // place to specify rules
    'react/prop-types': 0,
    // disable the rule for all files
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: '**/*.+(ts|tsx)',
      rules: {
        'ban-ts-ignore': 0,
        'import/no-duplicates': 1,
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ],
  settings: {
    react: {
      version: '17.0.1',
    },
  },
}
