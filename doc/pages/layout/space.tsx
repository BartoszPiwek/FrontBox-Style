import { Code } from 'components/Code/Code';
import React from 'react';
import file from '!!raw-loader!./../../../src/layout/space.scss';
import { StylesheetModule } from 'templates/StylesheetModule/StylesheetModule';
import { CodeInline } from 'components/CodeInline/CodeInline';
import { CodePreview } from 'components/CodePreview/CodePreview';
import { GetStaticPropsResult } from 'next';
import sass from 'sass';

const style = `
@import "index";
  @include browser-reset-style;

  .space {
    @include space(20px, 10px);
  }

  .space-x {
    @include space-x(20px);
  }

  .space-y {
    @include space-y(10px);
  }

  /* Addon */
  .container {
    overflow: hidden;

    & + & {
      margin-top: 40px;
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .element {
    &:before {
      background: red;
      display: block;
      height: 40px;
      content: "";
    }

    &-50 {
      width: 50%;
    }

    &-100 {
      width: 100%;
    }
  }
`;

const mixin = `
space-x($space-horizontal);
space-y($space-vertical);
space($space-horizontal, $space-vertical);
`;

const usage = `
.space {
 @include space(20px, 10px);
}

.space-x {
 @include space-x(20px);
}

.space-y {
 @include space-y(10px);
}
`;

export interface ISpaceLayoutPage {
	css: string;
}

export default function SpaceLayoutPage(params: ISpaceLayoutPage) {
	const { css } = params;

	return (
		<StylesheetModule
			title="Space"
			filePath="src/layout/space.scss"
			fileContent={file}
			description="Create space between element children's."
		>
			<h2>Mixin</h2>
			<p>
				<CodeInline>$space-horizontal: pixels</CodeInline>
			</p>
			<p>
				<CodeInline>$space-vertical-y?: pixels || $space-horizontal</CodeInline>
			</p>
			<Code lang="scss" children={mixin} />

			<h2>Usage</h2>
			<Code lang="scss" children={usage} />

			<h2>Example</h2>
			<CodePreview style={css}>
				<>
					<div className="container">
						<div className="space-x content">
							<div className="element element-50"></div>
							<div className="element element-50"></div>
						</div>
					</div>

					<div className="container">
						<div className="space-y content">
							<div className="element element-100"></div>
							<div className="element element-100"></div>
						</div>
					</div>

					<div className="container">
						<div className="space content">
							<div className="element element-50"></div>
							<div className="element element-50"></div>
							<div className="element element-100"></div>
						</div>
					</div>
				</>
			</CodePreview>
		</StylesheetModule>
	);
}

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
	const sassOutput = sass.renderSync({
		includePaths: ['../'],
		data: style,
	});

	const css = sassOutput.css.toString('utf8');

	return {
		props: {
			css,
		},
	};
}
