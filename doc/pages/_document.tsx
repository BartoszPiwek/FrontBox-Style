import { Header, IHeader } from 'components/Header/Header';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React from 'react';
import { getContents } from 'utils/api';
import MyApp from './_app';

class MyDocument extends Document<IHeader> {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		const navigation = [...(await getContents('layout'))].map((item) => {
			const { title, slug } = item;

			return {
				title,
				slug,
			};
		});

		return { ...initialProps, navigation };
	}

	render() {
		const { navigation } = this.props;

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

export default MyDocument;
