import { IPermalinkCmsFields } from 'cms/collections/fields/permalink.cms-field';
import Layout from 'layouts/Layout';
import React from 'react';
import './../styles/main.scss';
import App from 'next/app';

export default class MyApp extends App {
	constructor(config) {
		super(config);
	}

	render() {
		const { Component, pageProps } = this.props;
		const { title, description, isCms = false, navigation } = pageProps as IPermalinkCmsFields;

		if (isCms) {
			return <Component />;
		}

		return (
			<Layout title={title} description={description} navigation={navigation}>
				<Component {...pageProps} />
			</Layout>
		);
	}
}
