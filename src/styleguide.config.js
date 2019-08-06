const path = require('path')

module.exports = {
  sections: [
    {
      name: 'Components',
      description: 'The list of components.',
      components: 'src/components/[A-Z]*/[A-Z]*.js'
    }
  ],
  contextDependencies: [path.resolve(__dirname, 'src')],
  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    return `import { ${name} } from 'react-styled-ui'`
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/ThemeWrapper'),
  } 
}