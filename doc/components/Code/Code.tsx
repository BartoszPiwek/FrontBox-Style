import classNames from 'classnames';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styles from './Code.module.scss';
import Prettier from 'prettier';
import parserHtml from 'prettier/parser-html';

export interface ICode {
	children?: ReactNode | string;
	lang: Language;
}

export const Code = (params: ICode) => {
	const { children, lang } = params;

	if (!children) {
		return <></>;
	}

	let code: string;
	if (typeof children === 'string') {
		code = children;
	} else {
		code = reactElementToJSXString(children);
	}

	// code = Prettier.format(code, {
	// 	parser: 'scss',
	// 	plugins: [parserHtml],
	// });
	code = code.replace(`<>`, '').replace(`</>`, '').trim();

	return (
		<Highlight {...defaultProps} code={code} language={lang}>
			{({ style, tokens, getLineProps, getTokenProps }) => (
				<pre className={classNames(styles.container, 'prism')} style={style}>
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
	);
};
