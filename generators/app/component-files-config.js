const allFiles = ['template.test.js'];
const standardComponent = allFiles.concat([
  'styles.scss'
]);

module.exports = {
  stateful: standardComponent.concat(['react-mobx-class.js']),
  stateless: standardComponent.concat(['react-mobx-function.js']),
  data: allFiles.concat(['mobx-data.js'])
};
