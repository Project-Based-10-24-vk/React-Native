module.exports = {
  preset: 'jest-expo',
  coverageReporters: [
    ['text', null],
    ['html', 'src/tests/coverage']
  ],
  testMatch: ['**/src/**/*.test.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/tests/**',
    '!src/constants/**',
    '!src/app/**',
    '!src/assets/**',
    '!src/**/**.{style,styles}.{js,jsx}',
    '!src/components/index.js'
  ],
  coverageDirectory: 'src/tests/coverage'
}
