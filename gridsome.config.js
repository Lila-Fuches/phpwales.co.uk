// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'PHP Wales Conference',
  siteUrl: 'https://www.phpwales.co.uk',
  siteDescription: 'We are pleased to present the 1st Annual PHP Wales Conference.',
  titleTemplate: '%s - PHP Wales',
  icon: '/favicon.ico',

  templates: {
    Speaker: '/:name',
    Sponsor: '/sponsors/:name',
    Partner: '/partners/:name',
    Type: '/type/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Speaker',
        path: 'content/speakers/*.md'
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Sponsor',
        path: 'content/sponsors/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          types: {
            typeName: 'Type',
            create: true
          }
        }
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Partner',
        path: 'content/partners/*.md'
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('tailwindcss')('./tailwind.config.js'),
          require('postcss-preset-env')()
        ])
        // if (process.env.NODE_ENV === 'production') {
        //   options.plugins.push(...[
        //     require('@fullhuman/postcss-purgecss')(config.purgecss),
        //   ])
        // }
        return options
      })
  }
}
