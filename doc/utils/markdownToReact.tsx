import directive from 'remark-directive';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';
import React from 'react';
import visit from 'unist-util-visit';
import breaks from 'remark-breaks';
import h from 'hastscript';
import {
	IInformationBanner,
	InformationBanner,
} from 'components/InformationBanner/InformationBanner';
import { CodeInline } from 'components/CodeInline/CodeInline';
import { Code, ICode } from 'components/Code/Code';
import { ICodeCmsEditorComponentOptions } from 'components/Code/Code.cms-editor-component-options';
import { childrenToString } from './children-to-string';
import { Paragraph } from 'components/Paragraph/Paragraph';

export default function markdownToReact(value: string): string {
	return (
		unified()
			.use(markdown)
			.use(breaks)
			.use(directive)
			.use(() => {
				return transform;

				function transform(tree) {
					visit(
						tree,
						['textDirective', 'leafDirective', 'containerDirective'],
						(node) => {
							var data = node.data || (node.data = {});
							var hast = h(node.name, node.attributes);

							data.hName = hast.tagName;
							data.hProperties = hast.properties;
						}
					);
				}
			})
			.use(remark2rehype)
			// @ts-ignore
			.use(rehype2react, {
				createElement: React.createElement,
				Fragment: React.Fragment,
				components: {
					paragraph: Paragraph,
					'code-inline': (props) => {
						return (
							<p>
								<CodeInline {...props} />
							</p>
						);
					},
					code: (props: ICodeCmsEditorComponentOptions) => {
						const { children, isFormatted } = props;
						return (
							<Code
								{...props}
								children={children[0]}
								isFormatted={isFormatted == 'true'}
							/>
						);
					},
					'information-banner': (props) => {
						const children = markdownToReact(childrenToString(<>{props.children}</>));

						return <InformationBanner {...props} children={children} />;
					},
				},
			})
			.processSync(value).result as string
	);
}
