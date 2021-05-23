import { Link } from 'components/Link/Link';
import styles from './Header.module.scss';
import navigation from './../../content/navigation.json';
import optionsCategories from './../../content/options/categories.json';

export interface IHeader {}

export const Header = (params: IHeader) => {
	return (
		<header className={styles.container}>
			<Link className={styles.title} title="FrontBox Style Documentation" href="/" />

			{optionsCategories.categories.map((category) => {
				const { title, slug } = category;

				return (
					<>
						<p className={styles.subtitle}>{title}</p>
						<ul className={styles.list}>
							{navigation
								.filter((nav) => nav.category === slug)
								.map((item, index) => {
									const { slug, title } = item;

									return (
										<li key={index}>
											<Link href={`/${slug}`} title={title} />
										</li>
									);
								})}
						</ul>
					</>
				);
			})}
		</header>
	);
};
