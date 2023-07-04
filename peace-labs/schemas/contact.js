import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
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
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Google Maps location link',
    }),
  ],
})
