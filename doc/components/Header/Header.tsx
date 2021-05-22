import { Link } from 'components/Link/Link';
import styles from './Header.module.scss';
import navigation from './../../content/navigation.json';

export interface IHeader {}

export const Header = (params: IHeader) => {
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
