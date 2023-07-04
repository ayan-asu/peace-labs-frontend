export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title for the gallery',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Enter the caption for the image',
            },
          ],
        },
      ],
      description: 'Upload and manage images for the gallery',
    },
  ],
}
