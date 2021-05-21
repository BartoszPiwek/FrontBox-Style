import { IPermalinkCmsFields } from 'cms/collections/fields/permalink.cms-field';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const contentPath = process.cwd() + '/content/';

export async function getFilesPath(path?: string): Promise<string[]> {
	const files = readdirSync(`${process.cwd()}/content/${path}`);

	return files.map((file) => {
		return file.replace('.mdx', '');
	});
}

export async function getSlugs(path: string): Promise<string[]> {
	return (await getContents(path)).map((content) => '/' + path + '/' + content.slug);
}

export const getContents = async <Output extends IPermalinkCmsFields>(
	path: string
): Promise<Output[]> => {
	const slugs = await getFilesPath(path);

	return await Promise.all(slugs.map((slug) => getContent<Output>(path, slug)));
};

export const getContent = async <Output>(path: string, slug: string): Promise<Output> => {
	const fileContent = readFileSync(join(contentPath, path, slug) + '.mdx');
	const content = matter<string, Output>(fileContent.toString()).data as Output;

	return content;
};
