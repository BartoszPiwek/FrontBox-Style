import { GetStaticPropsContext } from 'next';
import { useEffect } from 'react';

export default function AdminPage() {
	useEffect(() => {
		(async () => {
			await import('../cms/cms');
		})();
	}, []);

	return <div />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
	return {
		props: {
			isCms: true,
			title: 'Admin',
		},
	};
}
