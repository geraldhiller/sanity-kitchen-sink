export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608fbfc9c41e777d2ea5a454',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gstjjpwa',
                  apiId: 'a171a752-1cba-4a33-9581-d1773920a6ed'
                },
                {
                  buildHookId: '608fbfc98f94e54671cd63b0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2u9dguuv',
                  apiId: 'ad3d115d-d279-416b-80f2-d35ea999a022'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geraldhiller/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2u9dguuv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
