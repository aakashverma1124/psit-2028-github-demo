module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-require': 'off'
  }
};

