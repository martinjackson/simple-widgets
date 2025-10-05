/*eslint no-undef: "error"*/
/*eslint-env node*/

module.exports = {
    "settings": {
      "react": {
        "version": "detect"
      },
    },
    "env": {
        "browser": true,
        "node": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'react-hooks',
        'jest'
    ],
    "rules": {
      "semi": 'off',
      'no-console': 'off',
      'react/jsx-filename-extension': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      "react/prop-types": "off",
      "no-unused-vars": [
        "warn", { "varsIgnorePattern": "^_|TS|process|module", "argsIgnorePattern": "^_" }
    ]
    }
}

