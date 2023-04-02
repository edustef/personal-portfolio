import { defineType } from 'sanity'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [],
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'isCurrent',
      title: 'Is Current',
      type: 'boolean',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (rule) => rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({ parent }) => parent?.isCurrent,
    },
    {
      name: 'todayText',
      title: 'Today Text',
      type: 'string',
      hidden: ({ parent }) => !parent?.isCurrent,
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skill' }],
        },
      ],
    },
  ],
})
