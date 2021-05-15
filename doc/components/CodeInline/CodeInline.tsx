import { ReactNode } from 'react';
import styles from './CodeInline.module.scss';

export interface ICodeInline {
	children: ReactNode | string;
}

export const CodeInline = (params: ICodeInline) => {
	const { children } = params;

	return <span className={styles.container}>{children}</span>;
};
