import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Professor', value: 'Professor'},
          {title: 'PhD', value: 'Graduate and Undergraduates'},
          {title: 'Undergraduates', value: 'Graduate and Undergraduates'},
          {title: 'Alumni', value: 'Alumni'},
          {title: 'Graduate', value: 'Graduate and Undergraduates'},
        ],
      },
    }),
    defineField({
      name: 'category',
      title: 'Currently Studying',
      type: 'string',
      options: {
        list: [
          {title: 'Professor', value: 'Professor'},
          {title: 'PhD', value: 'PhD'},
          {title: 'Undergraduate', value: 'Undergraduate'},
          {title: 'Alumni', value: 'Alumni'},
          {title: 'Graduate', value: 'Graduate'},
        ],
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url', // Use 'url' type for the LinkedIn link
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
