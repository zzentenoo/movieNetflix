module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": ["error", { "varsIgnorePattern": "React" }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },

    ],
  },
}
