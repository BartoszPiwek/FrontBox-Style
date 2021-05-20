import {
	IPermalinkCmsFields,
	permalinkCmsFields,
} from 'cms/collections/fields/permalink.cms-field';
import { CmsField } from 'netlify-cms-core';

export interface IStylesheetTemplateCmsFields extends IPermalinkCmsFields {
	title: string;
	content: string;
	filePath: string;
}

export const stylesheetTemplateCmsFields: CmsField[] = permalinkCmsFields([
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
