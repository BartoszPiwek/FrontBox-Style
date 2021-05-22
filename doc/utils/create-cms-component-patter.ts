export interface ICreateCmsComponentPatter {
	componentName: string;
	isChildrenString?: boolean;
	params?: Array<{
		value: string;
		isString?: boolean;
	}>;
}

export const createCmsComponentPatter = (config: ICreateCmsComponentPatter): RegExp => {
	const { componentName, params = [], isChildrenString = false } = config;

	const componentParams = params
		.map((param, index) => {
			const { value, isString } = param;

			const matchString =
				value + '=' + (isString ? '{`' : '{') + '([\\s\\S]*?)' + (isString ? '`}' : '}');

			return `${index === 0 ? ' ' : ''}${matchString}`;
		})
		.join(' ');

	const regexp = new RegExp(
		`^<${componentName}${componentParams}>${isChildrenString ? '{`' : ''}\n([\\s\\S]*?)\n${
			isChildrenString ? '`}' : ''
		}<\/${componentName}>`
	);

	return regexp;
};
