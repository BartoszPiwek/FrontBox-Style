import classNames from 'classnames';
import styles from './Link.module.scss';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';

export interface ILink {
	title: string;
	href: string;
}

export const Link = (params: ILink) => {
	const { title, href } = params;

	return (
		<NextLink href={href}>
			<a
				className={classNames(styles.container, {
					[styles.isActive]: useRouter().asPath === href,
				})}
			>
				{title}
			</a>
		</NextLink>
	);
};
