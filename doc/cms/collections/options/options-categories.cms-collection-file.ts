import { CmsCollectionFile } from 'netlify-cms-core';

export const optionsCategoriesCmsCollectionFile: CmsCollectionFile = {
	file: '/content/options/categories.json',
	label: 'Categories',
	name: 'categories',
	fields: [
		{
			name: 'categories',
			label: 'Categories',
			widget: 'list',
			fields: [
				{
					name: 'slug',
					label: 'Slug',
				},
				{
					name: 'title',
					label: 'Title',
				},
			],
		},
	],
};
