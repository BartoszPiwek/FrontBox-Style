import { Link } from 'components/Link/Link';
import { spacePageInfo } from 'pages/_layout/space';
import { wrapPageInfo } from 'pages/_layout/wrap';
import { breakpointsPageInfo } from 'pages/settings/breakpoints';
import { colorPageInfo } from 'pages/settings/color';
import styles from './Header.module.scss';

export interface IHeader {}

const pages = [wrapPageInfo, spacePageInfo, colorPageInfo, breakpointsPageInfo];

export const Header = (params: IHeader) => {
	return (
		<header className={styles.container}>
			<p className={styles.title}>FrontBox Style</p>
			<ul className={styles.list}>
				<li>
					<Link title="Homepage" href="/" />
				</li>
				{pages.map((page, index) => (
					<li key={index}>
						<Link {...page} />
					</li>
				))}
			</ul>
		</header>
	);
};
