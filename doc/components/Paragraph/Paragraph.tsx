import { ReactNode } from 'react';

export interface IParagraph {
	children: ReactNode | string;
}

export const Paragraph = (params: IParagraph) => {
	const { children } = params;
	return <p>{children}</p>;
};
