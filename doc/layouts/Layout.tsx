import { Header } from 'components/Header/Header';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';

export interface ILayout {
	title: string;
	description: string;
	children?: ReactNode;
}

export default function Layout(params: ILayout) {
	const { children, title, description } = params;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>{title}</title>
				<meta name="description" content={description} />
				{/* <link rel="icon" href={favicon} type="image/png" /> */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<div className={styles.page}>
				<Header />
				<main className={styles.main}>
					<div className="wrap">{children}</div>
				</main>
			</div>
		</>
	);
}
