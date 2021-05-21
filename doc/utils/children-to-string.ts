import { ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

export const childrenToString = (children: ReactNode | string): string => {
	if (typeof children !== 'string') {
		return reactElementToJSXString(children);
	}

	return children;
};
