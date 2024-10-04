module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    babelOptions: { configFile: './babel.config.js' },
    requireConfigFile: false,
    ecmaVersion: 2021,
    ecmaFeatures: { jsx: true },
    sourceType: 'module'
  },
  plugins: ['react', 'react-native', 'react-hooks', 'jsx-a11y'],
  settings: { react: { version: 'detect' } },
  rules: {
    'comma-dangle': ['error', 'never'],
    'prefer-arrow-callback': ['error'],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-key': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'no-unused-vars': 'error',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens-new-line',
        arrow: 'parens',
        condition: 'parens',
        logical: 'parens',
        prop: 'ignore'
      }
    ],
    semi: 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react-native/sort-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'off'
  },
  overrides: [
    {
      files: ['**/tests/**/*.*.js', '**/tests/**/*.js'],
      env: { jest: true }
    }
  ]
}
