declare module '*.svg' {
	const content: any;
	export default content;
}

declare module '!!raw-loader!*.scss' {
	const content: string;
	export default content;
}
