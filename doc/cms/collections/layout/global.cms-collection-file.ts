import { CmsCollectionFile } from "netlify-cms-core";
import { IVideoButtonCmsField, videoButtonCmsField } from "../../../components/VideoButton/VideoButton.cms-field";

export interface IGlobalCmsField extends IVideoButtonCmsField {
  favicon: string;
}

export const globalCmsCollectionFile: CmsCollectionFile = {
  label: "Global",
  name: "global",
  file: "content/layout/global.json",
  fields: [
    { name: "favicon", label: "Favicon", widget: "image", allow_multiple: false, required: false },
    videoButtonCmsField()
  ]
}