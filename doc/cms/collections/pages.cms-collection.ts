import { CmsCollection } from 'netlify-cms-core';

export const pagesCmsCollection: CmsCollection = {
	name: 'pages',
	label: 'Pages',
	format: 'frontmatter',
	files: [homepageCmsCollectionFile],
};
