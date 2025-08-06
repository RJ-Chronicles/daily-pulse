import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'import/order': ['warn', { groups: ['builtin', 'external', 'internal'] }],
    },
  },
];
