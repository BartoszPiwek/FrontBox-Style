import sass from 'sass';

export interface IRenderSCSS {
	style: string;
	scss: string;
}

export const renderScss = (data: string): IRenderSCSS => {
	const sassOutput = sass.renderSync({
		includePaths: ['../'],
		data,
	});

	return {
		style: sassOutput.css.toString('utf8'),
		scss: data,
	};
};
