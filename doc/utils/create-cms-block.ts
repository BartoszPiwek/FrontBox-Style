import { ICreateCmsComponentPatter } from './create-cms-component-patter';

export const createCmsFromBlock = (
	config: ICreateCmsComponentPatter,
	params: { [key: string]: string } = {}
): string => {
	const { children } = params;
	const _componentParams: Array<{ key: string; value: string }> = [];

	const array = Object.entries(params);

	for (const key in array) {
		if (Object.prototype.hasOwnProperty.call(array, key)) {
			const [paramKey, paramValue] = array[key];
			if (paramKey === 'children') {
				return;
			}

			_componentParams.push({
				key: paramKey,
				value: paramValue,
			});
		}
	}

	const { componentName } = config;
	const componentParams = _componentParams
		.map((param, index) => {
			const { key, value } = param;

			return `${index === 0 ? ' ' : ''}${key}="${value}"`;
		})
		.join(' ');

	// const componentParams = params
	// 	.map((param, index) => {
	// 		const { value, isString } = param;

	// 		const matchString =
	// 			value + '=' + (isString ? '"' : '{') + '(.*)' + (isString ? '"' : '}');

	// 		return `${index === 0 ? ' ' : ''}${matchString}`;
	// 	})
	// 	.join(' ');

	console.log(`<${componentName}${componentParams}>\n${children}\n</${componentName}>`);

	return `<${componentName}${componentParams}>\n${children}\n</${componentName}>`;
};
