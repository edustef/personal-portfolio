import { defineType } from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
  ],
})
