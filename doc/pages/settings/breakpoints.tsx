import { Code } from 'components/Code/Code';
import { InformationBanner } from 'components/InformationBanner/InformationBanner';
import React from 'react';
import file from '!!raw-loader!./../../../src/variables/breakpoints.scss';
import { StylesheetModule } from 'templates/StylesheetModule/StylesheetModule';

const usage = `
@import '~@bpiwek/frontbox-style';

$breakpoints: (
  sm: 300,
  lg: 500
);
`;

export interface IBreakpointsLayoutPage {}

export default function BreakpointsLayoutPage(params: IBreakpointsLayoutPage) {
	return (
		<StylesheetModule
			title="Breakpoints"
			filePath="src/settings/breakpoints.scss"
			fileContent={file}
			description="Breakpoints screen map."
		>
			<InformationBanner type="info">
				Declaration can be overwrite by own breakpoints.
			</InformationBanner>

			<h2>Modification</h2>
			<Code lang="scss" children={usage} />
		</StylesheetModule>
	);
}
