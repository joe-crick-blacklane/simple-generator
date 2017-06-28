'use strict';
const Generator = require('yeoman-generator');
const componentFiles = require('./component-files-config');
const changeCase = require('change-case');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'list',
        name: 'componentType',
        message: 'What type of component are you creating?',
        choices: ['stateful', 'stateless', 'data']
      },
      {
        type: 'list',
        name: 'componentLevel',
        message: 'What level of component are you creating?',
        choices: ['atom', 'molecule', 'organism']
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of your component (if multiple names, separate with hyphen)?'
      }];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    const componentType = componentFiles[this.props.componentType];

    componentType.forEach((component) => {
      const name = changeCase.pascalCase(this.props.componentName);
      const tagName = this.props.componentName.toLowerCase();
      const componentLevel = this.props.componentLevel;
      const rootFolder = componentLevel === 'page' ? 'pages' : 'components';
      const destinationPath = `${rootFolder}/${componentLevel}s/${tagName}`;
      this.fs.copyTpl(
        this.templatePath(component),
        this.destinationPath(`${destinationPath}/${getFileName(component, tagName)}`),
        {
          name,
          tagName,
          destinationPath
        }
      );
    });
  }
};

function getFileName(component, name) {
  const extension = component.match(/\.[0-9a-z]+$/i)[0];
  const isTest = component.indexOf('.test') > -1;
  return isTest ? `${name}.test.js` : name + extension;
}
