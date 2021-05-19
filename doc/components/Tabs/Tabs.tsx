import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import styles from './Tabs.module.scss';

export interface ITabs {
	items: Array<{
		label: string;
		Content: () => ReactElement;
	}>;
}

export default function Tabs(params: ITabs) {
	const { items } = params;

	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				{items.map((item, index) => (
					<button
						className={classNames(styles.button, {
							[styles.isActive]: activeIndex === index,
						})}
						type="button"
						key={index}
						onClick={() => setActiveIndex(index)}
					>
						{item.label}
					</button>
				))}
			</div>

			<div className={styles.body}>
				{items.map((item, index) => {
					const isActive = activeIndex === index;
					const { Content } = item;

					return (
						<div className={styles.item} key={index}>
							<div className={styles.itemButton}>
								<button
									className={classNames(styles.button, {
										[styles.isActive]: isActive,
									})}
									type="button"
									key={index}
									onClick={() => setActiveIndex(index)}
								>
									{item.label}
								</button>
							</div>

							{isActive && (
								<div className={styles.itemContent}>
									<Content />
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
