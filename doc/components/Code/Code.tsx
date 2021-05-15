import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import styles from './Code.module.scss';

export interface ICode {
	children: string;
	lang: Language;
}

export const Code = (params: ICode) => {
	const { children, lang } = params;

	return (
		<Highlight {...defaultProps} code={children.trim()} language={lang}>
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
