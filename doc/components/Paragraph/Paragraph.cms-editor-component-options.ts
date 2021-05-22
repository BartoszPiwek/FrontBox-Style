import { EditorComponentOptions } from 'netlify-cms-core';
import { editorCmsComponentToBlock } from 'utils/create-cms-block';
import {
	createCmsComponentPatter,
	ICreateCmsComponentPatter,
} from 'utils/create-cms-component-patter';
import { IParagraph } from './Paragraph';

const meta: ICreateCmsComponentPatter = {
	componentName: 'Paragraph',
};

export const paragraphCmsEditorComponentOptions: EditorComponentOptions = {
	id: 'paragraph',
	label: 'Paragraph',
	fields: [
		{
			name: 'children',
			label: 'Children',
			widget: 'markdown',
		},
	],
	pattern: createCmsComponentPatter(meta),
	fromBlock(match: RegExpMatchArray) {
		const [, children] = match;

		return {
			children,
		};
	},
	toBlock: (params: IParagraph) => {
		return editorCmsComponentToBlock(meta, params);
	},
	toPreview(params: IParagraph) {
		return 'TODO';
	},
};
