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
    'sort-imports-es6-autofix',
  ],
  rules: {
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', { code: 150 }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'object-curly-spacing': ['error', 'always'],
    'no-use-before-define': 0,
    'quote-props': 0,
    'jsx-a11y/label-has-associated-control': 0,
    allowForLoopAfterthoughts: 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'no-plusplus': 0,
    'react/function-component-definition': 0,
    // 'linebreak-style': ['error', 'windows'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
