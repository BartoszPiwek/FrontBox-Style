import { ReactNode } from 'react';
import Frame from 'react-frame-component';

export interface ICodePreview {
	style?: string;
	children: ReactNode | string;
}

export const CodePreview = (params: ICodePreview) => {
	const { style, children } = params;

	return (
		<Frame>
			{style && <style>{style}</style>}
			{children}
		</Frame>
	);
};
