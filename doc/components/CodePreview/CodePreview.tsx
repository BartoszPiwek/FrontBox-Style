import Tabs from 'components/Tabs/Tabs';
import React from 'react';
import { Code } from 'components/Code/Code';
import { ReactNode } from 'react';
import styles from './CodePreview.module.scss';
import ReactDOMServer from 'react-dom/server';
import { RenderPage } from 'components/RenderPage/RenderPage';

export interface ICodePreview {
	style?: string;
	scss?: string;
	children: ReactNode;
}

export const CodePreview = (params: ICodePreview) => {
	const { style, children, scss } = params;

	const source = ReactDOMServer.renderToStaticMarkup(children);

	const items = [
		{
			label: 'View',
			Content: () => <RenderPage style={style}>{children}</RenderPage>,
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
		Content: () => <Code lang="markup">{source}</Code>,
	});

	return <Tabs items={items}></Tabs>;
};
