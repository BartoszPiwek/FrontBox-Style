import { CmsCollection } from 'netlify-cms-core';
import { optionsCategoriesCmsCollectionFile } from './options/options-categories.cms-collection-file';

export const optionsCmsCollectionFile: CmsCollection = {
	name: 'options',
	label: 'Options',
	files: [optionsCategoriesCmsCollectionFile],
};
