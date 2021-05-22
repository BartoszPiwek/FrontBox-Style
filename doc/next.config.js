const path = require('path');

const withMDX = require('@next/mdx')({
	extension: /\.mdx$/,
});

module.exports = withMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
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
	webpack: (config, { isServer }) => {
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
});
