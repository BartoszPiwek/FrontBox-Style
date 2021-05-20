import directive from 'remark-directive';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';
import React from 'react';
import visit from 'unist-util-visit';
import breaks from 'remark-breaks';
import h from 'hastscript';
import { InformationBanner } from 'components/InformationBanner/InformationBanner';
import { CodeInline } from 'components/CodeInline/CodeInline';
import { Code, ICode } from 'components/Code/Code';
import { ICodeCmsEditorComponentOptions } from 'components/Code/Code.cms-editor-component-options';

export default function markdownToReact(value: string) {
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
						ondirective
					);
				}

				function ondirective(node) {
					console.log(node);

					var data = node.data || (node.data = {});
					var hast = h(node.name, node.attributes);

					data.hName = hast.tagName;
					data.hProperties = hast.properties;
				}
			})
			.use(remark2rehype)
			// @ts-ignore
			.use(rehype2react, {
				createElement: React.createElement,
				Fragment: React.Fragment,
				components: {
					'information-banner': InformationBanner,
					'code-inline': CodeInline,
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
				},
			})
			.processSync(value).result
	);
}
