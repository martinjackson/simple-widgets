
    import reactHooks from 'eslint-plugin-react-hooks';
    import pluginReact from 'eslint-plugin-react';

    export default [
      {
        files: ['**/*.js', '**/*.jsx'], // Apply to .js and .jsx files
        plugins: {
          react: pluginReact,
          'react-hooks': reactHooks,
        },
        languageOptions: {
          parserOptions: {
            ecmaFeatures: {
              jsx: true,
            },
          },
        },
        rules: {
          ...pluginReact.configs.recommended.rules,
          // Add or override specific React rules here
          // For example:
          // "react/jsx-uses-react": "off", // If using React 17+ JSX transform
          // "react/react-in-jsx-scope": "off", // If using React 17+ JSX transform
          "react/prop-types": "off",
           'react-hooks/exhaustive-deps': 'warn', // Check effect dependencies
        },
        settings: {
          react: {
            version: 'detect', // Automatically detect React version
          },
        },
      },
    ];