import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { renderScss } from './render-scss';

export const mdxSourceCompileScss = (
	result: MDXRemoteSerializeResult
): MDXRemoteSerializeResult => {
	const compiledSource = result.compiledSource.replace(
		/scss:`([\s\S]*?)`/,
		(match, scss): string => {
			const css = renderScss(scss);
			const styleProp = `css:\`${css}\``;

			return match + ', ' + styleProp;
		}
	);

	return {
		...result,
		compiledSource,
	};
};
