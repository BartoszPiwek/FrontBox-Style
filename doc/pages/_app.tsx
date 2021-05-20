import { IPermalinkCmsFields } from 'cms/collections/fields/permalink.cms-field';
import Layout from 'layouts/Layout';
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import './../styles/main.scss';

export default function APP(props: AppProps) {
	const { Component, pageProps } = props;
	const { title, description, isCms = false } = pageProps as IPermalinkCmsFields;

	if (isCms) {
		return <Component />;
	}

	return (
		<Layout title={title} description={description}>
			<Component {...pageProps} />
		</Layout>
	);
}
