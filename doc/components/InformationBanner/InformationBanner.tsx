import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './InformationBanner.module.scss';
import WarningIcon from '@icons/warning.svg';

export interface IInformationBanner {
	type: 'warning' | 'info' | 'danger' | 'success';
	children: ReactNode | string;
}

export const InformationBanner = (params: IInformationBanner) => {
	const { children, type } = params;

	return (
		<div className={classNames(styles.container, styles[`type-${type}`])}>
			<div className={styles.decoration}>
				{type === 'warning' && <WarningIcon className={styles.decorationIcon} />}
			</div>
			<div className={styles.inner}>{children}</div>
		</div>
	);
};
