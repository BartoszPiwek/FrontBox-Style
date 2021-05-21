import { EditorComponentOptions } from 'netlify-cms-core';
import { createCmsFromBlock } from 'utils/create-cms-block';
import {
	createCmsComponentPatter,
	ICreateCmsComponentPatter,
} from 'utils/create-cms-component-patter';
import { ICodeInline } from './CodeInline';

const meta: ICreateCmsComponentPatter = {
	componentName: 'CodeInline',
};

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
	pattern: createCmsComponentPatter(meta),
	fromBlock(match: RegExpMatchArray) {
		const [, children] = match;

		return {
			children,
		};
	},
	toBlock: (params: ICodeInline) => {
		return createCmsFromBlock(meta, params);
	},
	toPreview(params: ICodeInline) {
		return 'TODO';
	},
};
