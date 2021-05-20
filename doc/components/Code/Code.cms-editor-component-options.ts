import { EditorComponentOptions } from 'netlify-cms-core';
import { Language } from 'prism-react-renderer';
import { ICode } from './Code';

export interface ICodeCmsEditorComponentOptions {
	children: string[];
	lang: Language;
	isFormatted: string;
}

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
	pattern: /^::code\[(.*)\]{isFormatted="(.*)" lang="(.*)"}/,
	fromBlock(match: RegExpMatchArray): ICode {
		const [, children, _isFormatted, _lang] = match;

		const isFormatted = _isFormatted == 'true';
		const lang = _lang as Language;

		return {
			children,
			isFormatted,
			lang,
		};
	},
	toBlock(params: ICode) {
		const { isFormatted, children, lang } = params;

		return `::code[${children}]{isFormatted="${isFormatted}" lang="${lang}"}`;
	},
	toPreview(params: ICode) {
		return 'TODO';
	},
};
