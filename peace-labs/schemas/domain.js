export default {
  name: 'domain',
  title: 'Domains',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'domainNumber',
      title: 'Domain Number',
      type: 'number',
      //   readOnly: true,
      //   hidden: true,
      //   initialValue: () => {
      //     const query = '*[_type == "domain"]'
      //     return client.fetch(query).then((domains) => domains.length + 1)
      //   },
    },
  ],
}
