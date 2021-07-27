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
                  buildHookId: '60ff6b23adc1ad3a729d5d63',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-roes6bod',
                  apiId: '11ae6c7e-cb05-4026-8fbe-fcf8b860f301'
                },
                {
                  buildHookId: '60ff6b23aefc144142f47d82',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-p1g4yh7y',
                  apiId: '59b6d781-b451-459f-9a20-02929a8dddae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mamoth112/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-p1g4yh7y.netlify.app', category: 'apps'}
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
