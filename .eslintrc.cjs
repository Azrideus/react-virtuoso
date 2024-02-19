module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['dist/**/*'],
  plugins: ['react', 'react-hooks', '@typescript-eslint/eslint-plugin'],
  rules: {
    'no-undef': 'off',
    'no-undefined': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'no-case-declarations': 'off',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  overrides: [
    {
      files: ['e2e/*.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
}
