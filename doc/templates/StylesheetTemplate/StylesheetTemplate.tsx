import classNames from 'classnames';
import { Code } from 'components/Code/Code';
import React from 'react';
import { IStylesheetTemplateCmsFields } from './StylesheetTemplate.cms-field';
import styles from './StylesheetTemplate.module.scss';
import { MDXRemote } from 'next-mdx-remote';
import { CodeInline } from 'components/CodeInline/CodeInline';
import { InformationBanner } from 'components/InformationBanner/InformationBanner';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { CodePreview } from 'components/CodePreview/CodePreview';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IStylesheetTemplate extends Omit<IStylesheetTemplateCmsFields, 'content'> {
	fileContent: string;
	content: MDXRemoteSerializeResult;
}

export const StylesheetTemplate = (params: IStylesheetTemplate) => {
	const { title, description, fileContent, filePath, content } = params;

	return (
		<div className={classNames(styles.container)}>
			<h1 className={styles.title}>{title}</h1>

			<p className={styles.description}>{description}</p>

			<div className={styles.markdown}>
				<MDXRemote
					{...content}
					components={{
						Code: Code,
						CodeInline: CodeInline,
						InformationBanner: InformationBanner,
						Paragraph: Paragraph,
						CodePreview: CodePreview,
						p: ({ children }) => {
							return children;
						},
					}}
				></MDXRemote>
			</div>

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
