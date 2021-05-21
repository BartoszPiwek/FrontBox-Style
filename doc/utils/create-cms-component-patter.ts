export interface ICreateCmsComponentPatter {
	componentName: string;
	params?: Array<{
		value: string;
		isString?: boolean;
	}>;
}

export const createCmsComponentPatter = (config: ICreateCmsComponentPatter): RegExp => {
	const { componentName, params = [] } = config;

	const componentParams = params
		.map((param, index) => {
			const { value, isString } = param;

			const matchString =
				value + '=' + (isString ? '"' : '{') + '(.*)' + (isString ? '"' : '}');

			return `${index === 0 ? ' ' : ''}${matchString}`;
		})
		.join(' ');

	console.log(`^<${componentName}${componentParams}>\n((.|\s)*)\n<\/${componentName}>`);

	return new RegExp(`^<${componentName}${componentParams}>\n((.|\s)*)\n<\/${componentName}>`);
};
