import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export async function getStaticProps(
	context: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> {
	return {
		props: {
			foo: 'fee',
		},
	};
}

export default MyDocument;
