import { Code } from 'components/Code/Code';
import { InformationBanner } from 'components/InformationBanner/InformationBanner';
import React from 'react';
import file from '!!raw-loader!./../../../src/layout/wrap.scss';
import { StylesheetModule } from 'templates/StylesheetModule/StylesheetModule';
import { CodeInline } from 'components/CodeInline/CodeInline';
import { CodePreview } from 'components/CodePreview/CodePreview';
import sass from 'node-sass';
import { GetStaticPropsResult } from 'next';

const style = `
.wrap {
	@extend %wrap-style;
}
`;

const usage = `
.wrap {
	@include wrap(1024px, 16px);
}
`;

export interface IWrapLayoutPage {
	css: string;
}

export default function WrapLayoutPage(params: IWrapLayoutPage, foo) {
	const { css } = params;

	return (
		<StylesheetModule
			title="Wrap"
			filePath="src/layout/wrap.scss"
			description="Crete wrapper element to hold content in specific width and optional aside space."
		>
			<InformationBanner type="warning">
				<p>Before using this module, remember to include base style.</p>
				<Code lang="scss" children={style} />
			</InformationBanner>
			<h2>Mixin</h2>
			<p>
				<CodeInline>$max-width: pixels</CodeInline>
			</p>
			<p>
				<CodeInline>$space-aside?: pixels</CodeInline>
			</p>
			<Code lang="scss" children="wrap($max-width, $space-aside);" />
			<h2>Usage</h2>
			<Code lang="scss" children={usage} />
			<h2>Example</h2>
			<p>
				Yellow color point padding (<CodeInline>$space-aside</CodeInline> variable)
			</p>
			<CodePreview style={css}>
				<div className="wrap wrap-small">
					<div>Wrap content</div>
				</div>

				<div className="wrap wrap-space">
					<div>Wrap content</div>
				</div>
			</CodePreview>
			<Code lang="scss" children={file} />
		</StylesheetModule>
	);
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
	const sassOutput = sass.renderSync({
		includePaths: ['../'],
		data: `
		  @import "index";
			@include browser-reset-style;

			.wrap {
				@include wrap-style;

				@include wrap(500px);

				&-space {
					@include wrap(700px, 20px);
				}
			}

			/* Addon */
			.wrap {
				text-align: center;
				background: yellow;

				div {
					background: red;
				}
			}
		`,
	});

	const css = sassOutput.css.toString('utf8');

	return {
		props: {
			css,
		},
	};
}
