import { defineType } from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'dateIssued',
      title: 'Date Issued',
      type: 'date',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
})
