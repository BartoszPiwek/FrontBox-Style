import { Code } from 'components/Code/Code';
import { InformationBanner } from 'components/InformationBanner/InformationBanner';
import React from 'react';
import file from '!!raw-loader!./../../../src/layout/wrap.scss';
import { CodeInline } from 'components/CodeInline/CodeInline';
import { CodePreview } from 'components/CodePreview/CodePreview';
import { GetStaticPropsResult } from 'next';
import { IRenderSCSS, renderScss } from 'utils/render-scss';
import { StylesheetTemplate } from 'templates/StylesheetTemplate/StylesheetTemplate';

export interface IWrapLayoutPage {
	style: {
		example1: IRenderSCSS;
	};
}

export const wrapPageInfo = {
	title: 'Wrap',
	filePath: 'src/layout/wrap.scss',
	description:
		'Crete wrapper element to hold content in specific width and optional aside space.',
	fileContent: file,
	href: '/layout/wrap',
};

export default function WrapLayoutPage(params: IWrapLayoutPage) {
	const { style } = params;

	return (
		<StylesheetTemplate {...wrapPageInfo}>
			<InformationBanner type="warning">
				<p>Before using this module, remember to include base style.</p>
				<Code
					lang="scss"
					children={`.wrap {
	@include wrap-style;
}`}
				/>
			</InformationBanner>
			<h2>Mixin</h2>
			<p>
				<CodeInline>$max-width: pixels</CodeInline>
			</p>
			<p>
				<CodeInline>$space-aside?: pixels</CodeInline>
			</p>
			<Code lang="scss" isFormatted={false} children="wrap($max-width, $space-aside);" />
			<h2>Usage</h2>
			<Code
				lang="scss"
				children={`.wrap {
	@include wrap(1024px, 16px);
}`}
			/>
			<h2>Example</h2>
			<p>
				Yellow color point padding (<CodeInline>$space-aside</CodeInline> variable).
			</p>
			<CodePreview {...style.example1}>
				<>
					<div className="wrap wrap-small">
						<div>Wrap content</div>
					</div>

					<div className="wrap wrap-space">
						<div>Wrap content</div>
					</div>
				</>
			</CodePreview>
		</StylesheetTemplate>
	);
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
	return {
		props: {
			style: {
				example1: renderScss(`
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
	`),
			},
		},
	};
}
