import { ICreateCmsComponentPatter } from './create-cms-component-patter';

export const editorCmsComponentToBlock = (
	config: ICreateCmsComponentPatter,
	params: { [key: string]: any } = {}
): string => {
	const { children = '' } = params;
	const { componentName, isChildrenString = false } = config;
	const _componentParams: Array<{ key: string; value: string }> = [];

	Object.keys(params)
		.filter((key) => {
			return key !== 'children';
		})
		.forEach((key) => {
			const value = params[key];

			_componentParams.push({
				key,
				value,
			});
		});

	const componentParams = _componentParams
		.map((param) => {
			const { key, value } = param;
			const isString =
				config.params.find((param) => param.value === key)?.isString || key === 'children';

			if (isString) {
				return `${key}={\`${value}\`}`;
			}

			return `${key}={${value}}`;
		})
		.map((value, index) => {
			return `${index === 0 ? ' ' : ''}${value}`;
		})
		.join(' ');

	return `<${componentName}${componentParams}>${isChildrenString ? '{`' : ''}\n${children}\n${
		isChildrenString ? '`}' : ''
	}<\/${componentName}>`;
};
