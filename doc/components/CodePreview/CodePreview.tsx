import { ReactNode } from 'react';
import Frame from 'react-frame-component';
import styles from './CodePreview.module.scss';
export interface ICodePreview {
	style?: string;
	children: ReactNode | string;
}

export const CodePreview = (params: ICodePreview) => {
	const { style, children } = params;

	return (
		<Frame className={styles.container}>
			<>
				{style && <style>{style}</style>}
				{children}
			</>
		</Frame>
	);
};
