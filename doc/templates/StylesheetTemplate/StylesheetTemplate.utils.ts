import { getFilesPath, getContent } from 'utils/api';
import { IStylesheetTemplate } from './StylesheetTemplate';
import { IStylesheetTemplateCmsFields } from './StylesheetTemplate.cms-field';

export async function getStylesheetTemplateContentBySlug(
	path: string,
	slug: string
): Promise<IStylesheetTemplate> {
	const slugs = await getFilesPath(path);
	const contents = await Promise.all(
		slugs.map((slug) => getContent<IStylesheetTemplateCmsFields>(path, slug))
	);

	const content = contents.find((content) => content.slug === slug);

	const fileContent = await import(`!!raw-loader!./../../../src/${content.filePath}`);

	return {
		...content,
		fileContent: fileContent.default,
	};
}
