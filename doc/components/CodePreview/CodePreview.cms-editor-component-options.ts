import { EditorComponentOptions } from 'netlify-cms-core';
import { editorCmsComponentToBlock } from 'utils/create-cms-block';
import {
	createCmsComponentPatter,
	ICreateCmsComponentPatter,
} from 'utils/create-cms-component-patter';
import { ICodePreview } from './CodePreview';

const meta: ICreateCmsComponentPatter = {
	componentName: 'CodePreview',
	isChildrenString: true,
	params: [
		{
			value: 'scss',
			isString: true,
		},
	],
};

export const codePreviewCmsEditorComponentOptions: EditorComponentOptions = {
	id: 'code-preview',
	label: 'Code preview',
	fields: [
		{
			name: 'scss',
			label: 'SCSS',
			widget: 'text',
		},
		{
			name: 'children',
			label: 'Children',
			widget: 'text',
		},
	],
	pattern: createCmsComponentPatter(meta),
	fromBlock(match: RegExpMatchArray) {
		const [, scss, children] = match;

		return {
			scss,
			children,
		};
	},
	toBlock: (params: ICodePreview) => {
		return editorCmsComponentToBlock(meta, params);
	},
	toPreview(params: ICodePreview) {
		return 'TODO';
	},
};
