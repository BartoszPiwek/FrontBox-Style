import { EditorComponentOptions } from 'netlify-cms-core';
import { IInformationBanner } from './InformationBanner';

export const informationBannerCmsEditorComponentOptions: EditorComponentOptions = {
	id: 'information-banner',
	label: 'Information banner',
	fields: [
		{
			name: 'type',
			label: 'Type',
			widget: 'select',
			// @ts-ignore
			options: [
				{
					label: 'Warning',
					value: 'warning',
				},
				{
					label: 'Info',
					value: 'Info',
				},
				{
					label: 'Danger',
					value: 'danger',
				},
				{
					label: 'Success',
					value: 'success',
				},
			],
		},
		{
			name: 'children',
			label: 'Children',
			widget: 'markdown',
		},
	],
	pattern: /^::information-banner\[(.*)\]{type="(.*)"}/,
	fromBlock(match: RegExpMatchArray) {
		const [, children, type] = match;

		return {
			type,
			children,
		};
	},
	toBlock(params: IInformationBanner) {
		const { type, children } = params;

		return `::information-banner[${children}]{type="${type}"}`;
	},
	toPreview(params: IInformationBanner) {
		return 'TODO';
	},
};
