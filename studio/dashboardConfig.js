export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6173e4133dbcaf7e4c7cab28',
                  title: 'Sanity Studio',
                  name: 'teachtopics-studio',
                  apiId: '00d4d0a6-7dad-476c-aa2b-4bf37f0568db'
                },
                {
                  buildHookId: '6173e413fce6124d4356f514',
                  title: 'Portfolio Website',
                  name: 'teachtopics',
                  apiId: '48de6728-69f1-49ca-9732-663158a11ea3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/niranjanbala/teachtopics',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://teachtopics.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
