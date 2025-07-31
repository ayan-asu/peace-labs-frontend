import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tools',
  title: 'Tools',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'executableFile',
      title: 'Executable File (.exe)',
      type: 'file',
      options: {
        accept: '.exe',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'file',
              title: 'File',
              type: 'file',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'fileType',
              title: 'File Type',
              type: 'string',
              options: {
                list: [
                  {title: 'PDF Document', value: 'pdf'},
                  {title: 'ZIP Archive', value: 'zip'},
                  {title: 'DLL Library', value: 'dll'},
                  {title: 'Documentation', value: 'doc'},
                  {title: 'Other', value: 'other'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'File Description',
              type: 'string',
              description: 'Brief description of what this file contains',
            },
          ],
          preview: {
            select: {
              title: 'file.asset.originalFilename',
              subtitle: 'fileType',
              description: 'description',
            },
            prepare(selection) {
              const {title, subtitle, description} = selection
              return {
                title: title || 'Untitled file',
                subtitle: `${subtitle?.toUpperCase() || 'Unknown'} ${
                  description ? `- ${description}` : ''
                }`,
              }
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((files) => {
          if (!files || files.length === 0) {
            return 'At least one file is required'
          }
          return true
        }),
      description: 'Files like documentation, libraries, or other supporting materials',
    }),
    defineField({
      name: 'youtubeLink',
      title: 'YouTube Video Link',
      type: 'url',
      description: 'Optional YouTube video link for tool demonstration or tutorial',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }).custom((url) => {
          if (!url) return true // Allow empty values
          if (url.includes('youtube.com') || url.includes('youtu.be')) {
            return true
          }
          return 'Please enter a valid YouTube URL'
        }),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      files: 'files',
      hasVideo: 'youtubeLink',
      hasExecutable: 'executableFile',
    },
    prepare(selection) {
      const {title, subtitle, files, hasVideo, hasExecutable} = selection
      const fileCount = files ? files.length : 0
      const videoIndicator = hasVideo ? ' 📹' : ''
      const exeIndicator = hasExecutable ? ' 💻' : ''

      return {
        title,
        subtitle: subtitle
          ? `${subtitle.substring(0, 70)}... (${fileCount} file${
              fileCount !== 1 ? 's' : ''
            })${exeIndicator}${videoIndicator}`
          : `No description (${fileCount} file${
              fileCount !== 1 ? 's' : ''
            })${exeIndicator}${videoIndicator}`,
      }
    },
  },
})
