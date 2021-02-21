export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "project_title",
      type: "string",
    },
    
    {
      name: "project_link",
      type: "string",
    },
    
    {
      name: "project_image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "category",
      type: "array",
      title: "Project Categories",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};