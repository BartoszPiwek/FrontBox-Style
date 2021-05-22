import { EditorComponentOptions } from 'netlify-cms-core';
import { Language } from 'prism-react-renderer';
import { editorCmsComponentToBlock } from 'utils/create-cms-block';
import {
	createCmsComponentPatter,
	ICreateCmsComponentPatter,
} from 'utils/create-cms-component-patter';
import { ICode } from './Code';

const meta: ICreateCmsComponentPatter = {
	componentName: 'Code',
	isChildrenString: true,
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
					required: false,
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
			// @ts-ignore
			default: false,
		},
		{
			name: 'children',
			label: 'Children',
			widget: 'text',
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
	toBlock: (params: ICode) => {
		return editorCmsComponentToBlock(meta, params);
	},
	toPreview(params: ICode) {
		return 'TODO';
	},
};
