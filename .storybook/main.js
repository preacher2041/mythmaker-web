const { mergeConfig } = require('vite');
const path = require('path');
module.exports = {
	async viteFinal(config) {
		// return the customized config
		return mergeConfig(config, {
			// customize the Vite config here
			resolve: {
				alias: [{ find: '@', replacement: path.resolve(__dirname, '../src') }],
			},
		});
	},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite',
	},
};
