import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styles from './Code.module.scss';

export interface ICode {
	children: ReactNode | string;
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

	return (
		<Highlight {...defaultProps} code={code} language={lang}>
			{({ style, tokens, getLineProps, getTokenProps }) => (
				<pre className={styles.container} style={style}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};
