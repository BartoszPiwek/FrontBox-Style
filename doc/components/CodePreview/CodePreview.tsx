import Tabs from 'components/Tabs/Tabs';
import React from 'react';
import { Code } from 'components/Code/Code';
import { RenderPage } from 'components/RenderPage/RenderPage';

export interface ICodePreview {
	css?: string;
	scss?: string;
	children: string;
}

export const CodePreview = (params: ICodePreview) => {
	const { css, children, scss } = params;

	const items = [
		{
			label: 'View',
			Content: () => <RenderPage style={css}>{children}</RenderPage>,
		},
	];

	if (scss) {
		items.push({
			label: 'SCSS',
			Content: () => <Code lang="scss">{scss}</Code>,
		});
	}

	items.push({
		label: 'HTML',
		Content: () => <Code lang="markup">{children}</Code>,
	});

	return <Tabs items={items}></Tabs>;
};
