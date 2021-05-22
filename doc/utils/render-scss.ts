import sass from 'sass';
import stripCssComments from 'strip-css-comments';

export const renderScss = (data: string): string => {
	const sassOutput = sass.renderSync({
		includePaths: ['../'],
		data,
	});

	return stripCssComments(sassOutput.css.toString('utf8'), {
		preserve: false,
		whitespace: false,
	});
};
