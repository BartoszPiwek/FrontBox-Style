import { getContents } from './utils/api';
import fs from 'fs';

const init = async () => {
	const navigation = (await getContents('layout')).map((item) => {
		const { title, slug } = item;
		return {
			title,
			slug: `layout/${slug}`,
		};
	});

	fs.writeFileSync('./content/navigation.json', JSON.stringify(navigation));
};

init();
