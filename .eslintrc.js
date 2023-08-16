
// eslint-disable-next-line no-undef
module.exports = {
  "parser": "@babel/eslint-parser",
  "env": {
    "es6": true,
    "browser": true,
    "node": false,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended'
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": 'module',
    "ecmaFeatures": {
      'jsx': true,
    },
  },
  'plugins': [ 'react', 'jsx-runtime', 'react-hooks', "unused-imports" ],
  rules: {
    'strict': 0,
    'semi': 'off',
    'no-console': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-uses-react': 0,
    'react/jsx-uses-vars': 1,
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
