import { getFilesPath, getContent } from 'utils/api';
import { IStylesheetTemplate } from './StylesheetTemplate';
import { IStylesheetTemplateCmsFields } from './StylesheetTemplate.cms-field';
import { serialize } from 'next-mdx-remote/serialize';
import { mdxSourceCompileScss } from 'utils/mdx-source-compile-scss';

export async function getStylesheetTemplateContentBySlug(
	path: string,
	slug: string
): Promise<IStylesheetTemplate> {
	const slugs = await getFilesPath(path);
	const filesContents = await Promise.all(
		slugs.map((slug) => getContent<IStylesheetTemplateCmsFields>(path, slug))
	);

	const fileContent = filesContents.find((content) => content.slug === slug);

	const sourcefileContent = await import(`!!raw-loader!./../../../src/${fileContent.filePath}`);

	const content = mdxSourceCompileScss(await serialize(fileContent.content));

	return {
		...fileContent,
		content: content,
		fileContent: sourcefileContent.default,
	};
}
