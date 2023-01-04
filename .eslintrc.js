module.exports = {
  extends: [
    'plugin:@newrelic/eslint-plugin-newrelic/react',
    'plugin:@newrelic/eslint-plugin-newrelic/prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'jsx-a11y', 'graphql'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-function': 2,
        '@typescript-eslint/explicit-module-boundary-types': 2,
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/no-unsafe-argument': 2,
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-inferrable-types': 0,
      },
    },
  ],
  parserOptions: {
    files: ['*.js', '*.jsx'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
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
    'no-control-regex': 0,
  },
};
