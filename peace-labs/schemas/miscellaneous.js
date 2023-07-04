export default {
  name: 'miscellaneous',
  title: 'Miscellaneous',
  type: 'document',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Enter the caption for the miscellaneous item',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Enter the description for the miscellaneous item',
    },
  ],
}
