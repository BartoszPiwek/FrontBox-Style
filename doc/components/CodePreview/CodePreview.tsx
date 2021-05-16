import Tabs from 'components/Tabs/Tabs';
import React from 'react';
import { ReactNode } from 'react';
import Frame from 'react-frame-component';
import styles from './CodePreview.module.scss';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Code } from 'components/Code/Code';

export interface ICodePreview {
	style?: string;
	scss?: string;
	children: ReactNode;
}

export const CodePreview = (params: ICodePreview) => {
	const { style, children, scss } = params;

	const source = reactElementToJSXString(children);

	const items = [
		{
			label: 'View',
			Content: () => (
				<Frame className={styles.container}>
					<>
						{style && <style>{style}</style>}
						{children}
					</>
				</Frame>
			),
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
