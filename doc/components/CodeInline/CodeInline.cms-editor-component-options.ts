import { EditorComponentOptions } from 'netlify-cms-core';
import { ICodeInline } from './CodeInline';

export const codeInlineCmsEditorComponentOptions: EditorComponentOptions = {
	id: 'code-inline',
	label: 'Code inline',
	fields: [
		{
			name: 'children',
			label: 'Children',
			widget: 'string',
		},
	],
	pattern: /^::code-inline\[(.*)\]/,
	fromBlock(match: RegExpMatchArray) {
		const [, children] = match;

		return {
			children,
		};
	},
	toBlock(params: ICodeInline) {
		const { children } = params;

		return `::code-inline[${children}]`;
	},
	toPreview(params: ICodeInline) {
		return 'TODO';
	},
};
