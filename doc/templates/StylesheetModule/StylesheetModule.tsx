import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './StylesheetModule.module.scss';
import { CodePreview } from 'components/CodePreview/CodePreview';

export interface IStylesheetModule {
	title: string;
	description: string;
	filePath: string;
	children: ReactNode;
}

export const StylesheetModule = (params: IStylesheetModule) => {
	const { title, filePath, children, description } = params;

	return (
		<div className={classNames(styles.container)}>
			<div className="wrap">
				<h1 className={styles.title}>{title}</h1>

				<p className={styles.description}>{description}</p>
				<div className="stylesheet-module">{children}</div>

				<CodePreview style=".wrap {color: red}">
					<div className="wrap">{title}</div>
				</CodePreview>
			</div>
		</div>
	);
};
