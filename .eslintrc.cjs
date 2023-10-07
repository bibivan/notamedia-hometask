/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'no-new': 'error',
    'no-unused-expressions': 'error',
    'space-before-function-paren': ['error', {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }]
  }
}
