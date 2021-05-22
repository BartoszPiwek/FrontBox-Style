import { GetStaticPathsResult, GetStaticPropsResult } from 'next';
import React from 'react';
import {
	IStylesheetTemplate,
	StylesheetTemplate,
} from 'templates/StylesheetTemplate/StylesheetTemplate';
import { getStylesheetTemplateContentBySlug } from 'templates/StylesheetTemplate/StylesheetTemplate.utils';
import { getSlugs } from 'utils/api';

export default function LayoutPages(params: IStylesheetTemplate) {
	return <StylesheetTemplate {...params} />;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const paths = await getSlugs('layout');

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context): Promise<GetStaticPropsResult<IStylesheetTemplate>> {
	const { slug } = context.params;
	const props = await getStylesheetTemplateContentBySlug('layout', slug);

	return {
		props,
	};
}
