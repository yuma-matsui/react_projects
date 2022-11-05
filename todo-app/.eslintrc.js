module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'standard',
    'standard-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'react-hooks'
  ],
  rules: {
  }
}
