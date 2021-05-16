import Layout from 'layouts/Layout';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { IStylesheetModule } from 'templates/StylesheetModule/StylesheetModule';
import './../styles/main.scss';

function APP(props: AppProps) {
	const { Component, pageProps } = props;
	const { title, description } = pageProps as IStylesheetModule;

	return (
		<Layout title={title} description={description}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default APP;
