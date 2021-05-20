import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './InformationBanner.module.scss';
import WarningIcon from '@icons/warning.svg';

export type IInformationBannerType = 'warning' | 'info' | 'danger' | 'success';

export interface IInformationBanner {
	type: IInformationBannerType;
	children: ReactNode | string;
}

export const InformationBanner = (params: IInformationBanner) => {
	const { children, type } = params;

	return (
		<div className={classNames(styles.container, styles[`type-${type}`])}>
			<div className={styles.decoration}>
				<WarningIcon className={styles.decorationIcon} />
			</div>
			<div className={styles.inner}>{children}</div>
		</div>
	);
};
