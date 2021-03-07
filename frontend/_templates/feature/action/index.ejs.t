---
inject: true
to: src/Store/<%= h.changeCase.pascalCase(name).toLowerCase() %>/action.ts
after: "from './types'"
---
export function <%= h.changeCase.pascalCase(actionName) %>Action(payload: any): <%= h.changeCase.pascalCase(name) %>ActionTypes {
  return {
    type: <%= h.changeCase.snakeCase(actionName).toUpperCase() %>,
    payload: payload,
  }
}
