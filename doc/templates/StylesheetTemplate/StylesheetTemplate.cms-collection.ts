import { CmsCollection } from 'netlify-cms-core';
import { IPermalinkCmsFields } from 'cms/collections/fields/permalink.cms-field';
import { stylesheetTemplateCmsFields } from './StylesheetTemplate.cms-field';

export interface IStylesheetTemplateCmsCollectionFile extends IPermalinkCmsFields {
	title: string;
	description: string;
}

export const stylesheetTemplateCmsCollectionFile = (
	folder: string,
	label: string,
	name: string
): CmsCollection => {
	return {
		name,
		label,
		format: 'frontmatter',
		extension: 'mdx',
		create: true,
		folder: `content/${folder}`,
		slug: '{{slug}}',
		identifier_field: 'slug',
		fields: stylesheetTemplateCmsFields,
	};
};
