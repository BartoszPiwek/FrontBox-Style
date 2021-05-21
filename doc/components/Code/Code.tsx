import classNames from 'classnames';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { PureComponent, ReactNode } from 'react';
import styles from './Code.module.scss';
import Prettier, { BuiltInParserName, LiteralUnion } from 'prettier';
import parserHtml from 'prettier/parser-html';
import parserPostCss from 'prettier/parser-postcss';
import { childrenToString } from 'utils/children-to-string';

export interface ICode {
	children?: ReactNode | string;
	lang: Language;
	isFormatted?: boolean;
}

export class Code extends PureComponent<ICode> {
	static defaultProps = {
		isFormatted: true,
	};

	constructor(config: ICode) {
		super(config);
	}

	private formatCode(code: string) {
		if (!this.props.isFormatted) {
			return code;
		}

		const getParserName = (lang: Language): LiteralUnion<BuiltInParserName> => {
			switch (lang) {
				case 'markup':
					return 'html';
			}

			return lang;
		};

		return Prettier.format(code, {
			parser: getParserName(this.props.lang),
			plugins: [parserHtml, parserPostCss],
		});
	}

	render() {
		if (!this.props.children) {
			return <></>;
		}
		const code = childrenToString(this.props.children);

		const formattedCode = this.formatCode(code).replace(`<>`, '').replace(`</>`, '').trim();

		return (
			<div className={styles.container}>
				<Highlight {...defaultProps} code={formattedCode} language={this.props.lang}>
					{({ tokens, getLineProps, getTokenProps }) => (
						<pre className={classNames(styles.code)}>
							{tokens.map((line, i) => (
								<div {...getLineProps({ line, key: i })}>
									{line.map((token, key) => {
										const props = getTokenProps({ token, key });
										props.children = props.children.replace('	', '  ');

										return <span {...props} />;
									})}
								</div>
							))}
						</pre>
					)}
				</Highlight>
			</div>
		);
	}
}
