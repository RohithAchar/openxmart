import type { CollectionConfig } from "payload";

export const Billboard: CollectionConfig = {
  slug: "billboard",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
