import { getContents } from './utils/api';
import fs from 'fs';
import { IStylesheetTemplateCmsFields } from 'templates/StylesheetTemplate/StylesheetTemplate.cms-field';

const init = async () => {
	const navigation = (await getContents<IStylesheetTemplateCmsFields>('pages')).map((item) => {
		const { title, slug, category } = item;

		return {
			title,
			slug,
			category,
		};
	});

	fs.writeFileSync('./content/navigation.json', JSON.stringify(navigation));
};

init();
