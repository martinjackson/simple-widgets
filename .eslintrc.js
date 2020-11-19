module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": 'module',
    "ecmaFeatures": {
      'jsx': true,
    },
  },
  'plugins': [ 'react', 'react-hooks' ],
  rules: {
    'strict': 0,
    'semi': 'off',
    'no-console': 'off',
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  "settings": {
    "react": {
      "version": "detect",
    }
  }
};
