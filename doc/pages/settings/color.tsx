import { Code } from 'components/Code/Code';
import React from 'react';
import file from '!!raw-loader!./../../../src/variables/color.scss';
import { StylesheetModule } from 'templates/StylesheetModule/StylesheetModule';
import { CodeInline } from 'components/CodeInline/CodeInline';
import { CodePreview } from 'components/CodePreview/CodePreview';
import { GetStaticPropsResult } from 'next';
import sass from 'sass';

const fn = `
// $valueIndex: string
color($valueIndex);
`;

const usage = `
$colors: (
  primary: blue,
  secondary: red
);

.element {
	background: color('primary');
}`;

const style = `
@import 'index';

$colors: (
  primary: blue,
  secondary: red
);

.text {
  &-primary {
    color: color('primary');
  }
  &-secondary {
    color: color('secondary');
  }
}
`;

export interface IColorLayoutPage {
	css: string;
}

export const colorPageInfo = {
	title: 'Color',
	filePath: 'src/settings/color.scss',
	fileContent: file,
	description: 'Get color value.',
	href: '/settings/color',
};

export default function ColorLayoutPage(params: IColorLayoutPage) {
	const { css } = params;

	return (
		<StylesheetModule {...colorPageInfo}>
			<h2>Function</h2>
			<p>
				Return key value from <CodeInline>$colors</CodeInline> map.
			</p>
			<p>
				<CodeInline>$key: string</CodeInline>
			</p>
			<Code lang="scss" children="color($key);" />

			<h2>Usage</h2>
			<Code lang="scss" children={usage} />

			<h2>Example</h2>
			<CodePreview style={css} scss={style}>
				<>
					<p className="text-primary">Color text primary</p>
					<p className="text-secondary">Color text secondary</p>
				</>
			</CodePreview>
		</StylesheetModule>
	);
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
	const sassOutput = sass.renderSync({
		includePaths: ['./../'],
		data: style,
	});

	const css = sassOutput.css.toString('utf8');

	return {
		props: {
			css,
		},
	};
}
