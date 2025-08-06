module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  globals: {
    process: 'readonly',
    console: 'readonly',
    module: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
