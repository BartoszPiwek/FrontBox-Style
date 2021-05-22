import { EditorComponentOptions } from 'netlify-cms-core';
import React from 'react';
import { editorCmsComponentToBlock } from 'utils/create-cms-block';
import {
	createCmsComponentPatter,
	ICreateCmsComponentPatter,
} from 'utils/create-cms-component-patter';
import { IInformationBanner, InformationBanner } from './InformationBanner';

const meta: ICreateCmsComponentPatter = {
	componentName: 'InformationBanner',
	params: [
		{
			value: 'type',
			isString: true,
		},
	],
};

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
	pattern: createCmsComponentPatter(meta),
	fromBlock(match: RegExpMatchArray) {
		const [, type, children] = match;

		return {
			type,
			children,
		};
	},
	toBlock: (params: IInformationBanner) => editorCmsComponentToBlock(meta, params),
	toPreview(params: IInformationBanner) {
		return 'TODO';
	},
};
