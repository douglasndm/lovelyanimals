module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@app': './src',
					'@assets': './assets',
					'@animations': './assets/animations',
					'@components': './src/components',
					'@contexts': './src/contexts',
					'@services': './src/services',
					'@views': './src/views',
					'@utils': './src/utils',
				},
			},
		],
	],
};
