module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'class-methods-use-this': 'off', // it will disable to put 'this' auto
    'no-param-reassign': 'off', // allow to receive and make changes of params
    camelcase: 'off', // avoiding camelCase
    // ESlint does not allow to declare variables that we are not using
    // so, at the follow config we are escaping 'next' variable
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'prettier/prettier': 'error',
  },
};
