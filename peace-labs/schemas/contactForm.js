export default {
  name: 'contactForm',
  title: 'Contact Form',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
  ],
}
