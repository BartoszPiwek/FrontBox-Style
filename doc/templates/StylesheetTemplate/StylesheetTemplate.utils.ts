import { getFilesPath, getContent } from 'utils/api';
import { IStylesheetTemplate } from './StylesheetTemplate';
import { IStylesheetTemplateCmsFields } from './StylesheetTemplate.cms-field';
import { serialize } from 'next-mdx-remote/serialize';
import { mdxSourceCompileScss } from 'utils/mdx-source-compile-scss';

export async function getStylesheetTemplateContentBySlug(
	slug: string
): Promise<IStylesheetTemplate> {
	const slugs = await getFilesPath('pages');
	const filesContents = await Promise.all(
		slugs.map((slug) => getContent<IStylesheetTemplateCmsFields>('pages', slug))
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
