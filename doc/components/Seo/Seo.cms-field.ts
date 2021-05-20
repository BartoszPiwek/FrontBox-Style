import { CmsField } from "netlify-cms-core";

export interface ISeoCmsField {
  seo: ISeoCmsFields;
}

export interface ISeoCmsFields {
  title: string;
  description: string;
  keywords: string;
}

export const seoCmsField: CmsField = {
  name: "seo",
  label: "Seo",
  widget: 'object',
  collapsed: true,
  fields: [
    { label: "Title", name: "title" },
    { label: "Description", name: "description", widget: 'text' },
    { label: "Keywords", name: "keywords", required: false },
  ]
};
