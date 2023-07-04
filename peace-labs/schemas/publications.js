// schema.js

export default {
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Journals', value: 'journals'},
          {title: 'Conferences', value: 'conferences'},
          {title: 'Miscellaneous', value: 'miscellaneous'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedBy',
      title: 'Published by',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
