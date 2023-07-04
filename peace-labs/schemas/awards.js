export default {
  name: 'awards',
  title: 'Awards',
  type: 'document',
  fields: [
    {
      name: 'award',
      title: 'Award',
      type: 'string',
      description: 'Enter the name of the award',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'Enter the year the award was received',
    },
    {
      name: 'givenBy',
      title: 'Given By',
      type: 'string',
      description: 'Enter the name of the organization or entity that gave the award',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Enter a description or details about the award',
    },
  ],
}
