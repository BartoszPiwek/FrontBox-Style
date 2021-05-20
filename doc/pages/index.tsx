import { GetStaticPropsContext } from 'next';

export default function HomePage() {
	return <div>TODO</div>;
}

export async function getStaticProps(context: GetStaticPropsContext) {
	return {
		props: {
			title: 'Admin',
		},
	};
}
