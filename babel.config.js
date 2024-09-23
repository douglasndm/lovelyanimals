module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './src',
          '@assets': './assets',
          '@components': './src/components',
          '@services': './src/services',
          '@views': './src/views',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
