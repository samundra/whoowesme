---
inject: true
to: src/Store/<%= h.changeCase.pascalCase(name).toLowerCase() %>/types.ts
before: "type <%= h.changeCase.pascalCase(name) %>ActionTypes"
---
interface <%= h.changeCase.pascalCase(actionName) %>Action {
  type: typeof <%= h.changeCase.snakeCase(actionName).toUpperCase() %>
  payload: any
}


