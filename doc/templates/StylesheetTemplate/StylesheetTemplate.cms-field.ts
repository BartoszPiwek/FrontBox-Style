import { IPermalinkCmsFields, permalinkCmsFields } from 'cms/fields/permalink.cms-field';
import { CmsField } from 'netlify-cms-core';

export interface IStylesheetTemplateCmsFields extends IPermalinkCmsFields {
	readonly title: string;
	readonly content: string;
	readonly category: string;
	readonly filePath: string;
}

export const stylesheetTemplateCmsFields: CmsField[] = permalinkCmsFields([
	{
		name: 'category',
		label: 'Category',
		collection: 'options',
		file: 'categories',
		widget: 'relation',
		search_fields: ['categories.*.slug'],
		value_field: 'categories.*.slug',
		display_fields: ['categories.*.slug'],
	},
	{
		name: 'title',
		label: 'Title',
	},
	{
		name: 'description',
		label: 'Description',
	},
	{
		name: 'content',
		label: 'Content',
		widget: 'markdown',
	},
	{
		name: 'filePath',
		label: 'File path',
		hint: 'src/{{path}}',
	},
]);
