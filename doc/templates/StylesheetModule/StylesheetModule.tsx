import classNames from 'classnames';
import { Code } from 'components/Code/Code';
import React, { ReactNode } from 'react';
import styles from './StylesheetModule.module.scss';

export interface IStylesheetModule {
	title: string;
	description: string;
	filePath: string;
	fileContent: string;
	children: ReactNode;
}

export const StylesheetModule = (params: IStylesheetModule) => {
	const { title, filePath, fileContent, children, description } = params;

	return (
		<div className={classNames(styles.container)}>
			<div className="wrap">
				<h1 className={styles.title}>{title}</h1>

				<p className={styles.description}>{description}</p>
				<div className="stylesheet-module">{children}</div>

				<div className={styles.footer}>
					<h2 className={styles.subtitle}>
						File Content{' '}
						<span className={styles.subtitleLower}>
							(
							<a
								target="_blank"
								href={`https://github.com/BartoszPiwek/FrontBox-Style/tree/master/${filePath}`}
							>
								{filePath}
							</a>
							)
						</span>
					</h2>
					<Code lang="scss" children={fileContent} />
				</div>
			</div>
		</div>
	);
};
