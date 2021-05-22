import { Link } from 'components/Link/Link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

export interface IHeader {
	navigation: Array<{
		title: string;
		slug: string;
	}>;
}

export const Header = (params: IHeader) => {
	const { navigation = [] } = params;

	return (
		<header className={styles.container}>
			<p className={styles.title}>FrontBox Style</p>
			<ul className={styles.list}>
				<li>
					<Link title="Homepage" href="/" />
				</li>

				{navigation.map((item, index) => {
					const { slug, title } = item;

					return (
						<li key={index}>
							<Link href={`/${slug}`} title={title} />
						</li>
					);
				})}
			</ul>
		</header>
	);
};
