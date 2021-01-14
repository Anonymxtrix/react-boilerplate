module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': ['error'],
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['**/*.js'],
      plugins: ['@typescript-eslint', 'prettier', 'react'],
      env: {
        browser: true,
        es6: true,
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'airbnb/hooks',
        'prettier',
        'prettier/react',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
      ],
      rules: {
        'react/prop-types': 'off',
        'linebreak-style': 'off',
        'prettier/prettier': ['error'],
      },
    },
    {
      files: ['**/*.js'],
      env: {
        node: true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
