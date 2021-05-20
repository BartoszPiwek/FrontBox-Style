const path = require('path');

module.exports = {
	experimental: {
		externalDir: true,
	},
	future: {
		webpack5: true,
	},
	sass: true,
	modules: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		config.module.rules.push({
			test: /\.(png|jpg|gif)$/,
			use: ['file-loader'],
		});

		return config;
	},
};
