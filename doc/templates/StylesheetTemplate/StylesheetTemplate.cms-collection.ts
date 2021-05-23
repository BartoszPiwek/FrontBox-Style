import { CmsCollection } from 'netlify-cms-core';
import { stylesheetTemplateCmsFields } from './StylesheetTemplate.cms-field';

export const stylesheetTemplateCmsCollectionFile: CmsCollection = {
	name: 'stylesheets',
	label: 'Stylesheets',
	format: 'frontmatter',
	extension: 'mdx',
	create: true,
	folder: `content/pages`,
	slug: '{{slug}}',
	identifier_field: 'title',
	fields: stylesheetTemplateCmsFields,
};
