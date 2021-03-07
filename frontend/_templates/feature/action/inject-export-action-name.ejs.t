---
inject: true
to: src/Store/<%= h.changeCase.pascalCase(name).toLowerCase() %>/types.ts
at_line: 2
---
export const <%= h.changeCase.snakeCase(actionName).toUpperCase() %> = '<%= h.changeCase.snakeCase(actionName).toUpperCase() %>'
