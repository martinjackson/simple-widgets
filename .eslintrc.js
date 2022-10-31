module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "node": false,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:import/recommended'],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": 'module',
    "ecmaFeatures": {
      'jsx': true,
    },
  },
  'plugins': [ 'react', 'react-hooks', "unused-imports" ],
  rules: {
    'strict': 0,
    'semi': 'off',
    'no-console': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-uses-react': 'on',
    'react/jsx-uses-vars': 'on',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    "no-unused-vars": "off",                     // or "@typescript-eslint/no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		]
  },
  "settings": {
    "react": {
      "version": "detect",
    }
  }
};
