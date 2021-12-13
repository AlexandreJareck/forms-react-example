module.exports = (plop) => {
  plop.setGenerator('template', {
    description: 'Create a template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your template name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Template.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      }
    ]
  })
}
