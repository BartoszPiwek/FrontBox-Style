import { IHeader } from 'components/Header/Header';
import { ISeoCmsFields, seoCmsField } from 'components/Seo/Seo.cms-field';
import { CmsField } from 'netlify-cms-core';

export interface IPermalinkCmsFields extends ISeoCmsFields, IHeader {
	slug: string;
	isCms?: boolean;
	created: string;
}

export interface IPermalinkCmsFieldsParams {
	slug?: string;
}

export const permalinkCmsFields = (
	fields: CmsField[],
	params: IPermalinkCmsFieldsParams = {}
): CmsField[] => {
	const { slug } = params;

	return [
		// TODO: can't save default values
		// https://github.com/netlify/netlify-cms/issues/3046
		{ name: 'slug', label: 'Slug', default: slug, widget: slug ? 'hidden' : 'string' },
		{ ...seoCmsField },
		...fields,
		{
			label: 'Created',
			name: 'created',
			widget: 'datetime',
			format: 'MM-DD-YYYY hh:mm:ss',
		},
	];
};
