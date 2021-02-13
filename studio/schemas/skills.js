export default {
  name: "skills",
  type: "document",
  title: "Skills",

  fields: [
    {
      name: "skill_name",
      title: "Skill Name ",
      type: "string",
    },
    {
      name: "skillImage",
      title: "Skill Image",
      type: "image",
      options: {
        hotspot: true,
      }
     
    },
  ],
  
};
