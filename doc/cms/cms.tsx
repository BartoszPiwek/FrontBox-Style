import { codeCmsEditorComponentOptions } from 'components/Code/Code.cms-editor-component-options';
import { codeInlineCmsEditorComponentOptions } from 'components/CodeInline/CodeInline.cms-editor-component-options';
import { codePreviewCmsEditorComponentOptions } from 'components/CodePreview/CodePreview.cms-editor-component-options';
import { informationBannerCmsEditorComponentOptions } from 'components/InformationBanner/InformationBanner.cms-editor-component-options';
import { paragraphCmsEditorComponentOptions } from 'components/Paragraph/Paragraph.cms-editor-component-options';
import CMS from 'netlify-cms-app';
import { stylesheetTemplateCmsCollectionFile } from 'templates/StylesheetTemplate/StylesheetTemplate.cms-collection';

CMS.init({
	config: {
		load_config_file: false,
		media_folder: 'public/uploads',
		public_folder: '/uploads',
		backend: {
			name: 'github',
			repo: 'BartoszPiwek/FrontBox-Style',
			branch: 'main',
			auth_scope: 'repo',
			base_url: 'http://frontbox-style.vercel.app/',
		},
		local_backend: true,
		show_preview_links: true,
		collections: [stylesheetTemplateCmsCollectionFile('layout', 'Layout', 'layout')],
		// TODO: Can't config Next.js and NetlifyCMS tp append style for registerPreviewTemplate
		// @ts-ignore
		editor: {
			preview: false,
		},
	},
});

CMS.registerEditorComponent(informationBannerCmsEditorComponentOptions);
CMS.registerEditorComponent(codeInlineCmsEditorComponentOptions);
CMS.registerEditorComponent(codeCmsEditorComponentOptions);
CMS.registerEditorComponent(paragraphCmsEditorComponentOptions);
CMS.registerEditorComponent(codePreviewCmsEditorComponentOptions);
