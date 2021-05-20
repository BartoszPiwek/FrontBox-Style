import Head from 'next/head';
import React from 'react';
import { ISeoCmsFields } from './Seo.cms-field';

export default function Seo(params: ISeoCmsFields) {
	const { title, description, keywords } = params;

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		</Head>
	);
}
