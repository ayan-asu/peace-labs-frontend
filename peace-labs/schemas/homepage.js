export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  __experimental_isSingleton: true, // Ensures only one instance of this document

  fields: [
    {
      name: 'intro',
      title: 'Intro',
      type: 'blockContent',
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'number',
    },
    {
      name: 'labPics',
      title: 'Lab Pics',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'caption1',
      title: 'Caption 1',
      type: 'string',
    },
    {
      name: 'caption2',
      title: 'Caption 2',
      type: 'string',
    },
  ],
}
