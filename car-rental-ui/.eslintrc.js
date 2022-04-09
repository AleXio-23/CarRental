/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', { 'code': 150 }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': ['error', 'windows'],
    'no-use-before-define': 0,
    'quote-props': 0,
  },
};
