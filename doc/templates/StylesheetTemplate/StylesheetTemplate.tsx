import classNames from 'classnames';
import { Code } from 'components/Code/Code';
import React from 'react';
import markdownToReact from 'utils/markdownToReact';
import { IStylesheetTemplateCmsFields } from './StylesheetTemplate.cms-field';
import styles from './StylesheetTemplate.module.scss';

export interface IStylesheetTemplate extends IStylesheetTemplateCmsFields {
	fileContent: string;
}

export const StylesheetTemplate = (params: IStylesheetTemplate) => {
	const { title, description, fileContent, filePath, content } = params;

	return (
		<div className={classNames(styles.container)}>
			<h1 className={styles.title}>{title}</h1>

			<p className={styles.description}>{description}</p>

			<div className="stylesheet-module">{markdownToReact(content)}</div>

			<div className={styles.footer}>
				<h2 className={styles.subtitle}>
					File Content{' '}
					<span className={styles.subtitleLower}>
						(
						<a
							target="_blank"
							href={`https://github.com/BartoszPiwek/FrontBox-Style/tree/master/src/${filePath}`}
						>
							{filePath}
						</a>
						)
					</span>
				</h2>
				<Code lang="scss" children={fileContent} />
			</div>
		</div>
	);
};
