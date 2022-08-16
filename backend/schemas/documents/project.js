export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'headline_image',
      title: 'Headline Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string'
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
        }
      ]
    }
  ],
}