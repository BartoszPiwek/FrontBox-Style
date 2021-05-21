import { EditorComponentOptions } from 'netlify-cms-core';
import { Language } from 'prism-react-renderer';
import { createCmsFromBlock } from 'utils/create-cms-block';
import {
	createCmsComponentPatter,
	ICreateCmsComponentPatter,
} from 'utils/create-cms-component-patter';
import { ICode } from './Code';

export interface ICodeCmsEditorComponentOptions {
	children: string[];
	lang: Language;
	isFormatted: string;
}

const meta: ICreateCmsComponentPatter = {
	componentName: 'Code',
	params: [{ value: 'isFormatted' }, { value: 'lang', isString: true }],
};

export const codeCmsEditorComponentOptions: EditorComponentOptions = {
	id: 'code',
	label: 'Code',
	fields: [
		{
			name: 'lang',
			label: 'Lang',
			widget: 'select',
			// @ts-ignore
			options: [
				{
					label: 'SCSS',
					value: 'scss',
				},
				{
					label: 'HTML',
					value: 'markup',
				},
			],
		},
		{
			name: 'isFormatted',
			label: 'Is formatted',
			widget: 'boolean',
		},
		{
			name: 'children',
			label: 'Children',
			widget: 'string',
		},
	],
	pattern: createCmsComponentPatter(meta),
	fromBlock(match: RegExpMatchArray): ICode {
		const [, _isFormatted, _lang, children] = match;

		const isFormatted = _isFormatted == 'true';
		const lang = _lang as Language;

		return {
			children,
			isFormatted,
			lang,
		};
	},
	toBlock: createCmsFromBlock(meta),
	toPreview(params: ICode) {
		return 'TODO';
	},
};
