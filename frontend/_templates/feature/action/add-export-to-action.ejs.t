---
inject: true
to: src/Store/<%= h.changeCase.pascalCase(name).toLowerCase() %>/action.ts
before: "from './types'"
--
  <%= h.changeCase.snakeCase(actionName).toUpperCase() %>,
