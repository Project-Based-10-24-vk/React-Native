module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      ['module-resolver', { alias: { '~': './src' } }],
      'react-native-reanimated/plugin' // this plugin should be the last
    ]
  }
}
