module.exports = {
  extends: [
    'plugin:@newrelic/eslint-plugin-newrelic/react',
    'plugin:@newrelic/eslint-plugin-newrelic/prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'graphql'],
  settings: {
    react: {
      version: 'detect',
    },
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    test: 'readonly',
    expect: 'readonly',
  },
  ignorePatterns: ['**/__tests__/**/*', '**/__generated__/**/*'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    'jsx-a11y/no-onchange': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 1,
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-unsafe-argument': 1,
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 1,

    // As typescript continuously gets added, we should
    // turn this back on.
    '@typescript-eslint/camelcase': 'off',
  },
};
