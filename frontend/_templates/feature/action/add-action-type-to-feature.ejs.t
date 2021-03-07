---
inject: true
to: src/Store/<%= h.changeCase.pascalCase(name).toLowerCase() %>/types.ts
after: "type <%= h.changeCase.pascalCase(name) %>ActionTypes"
---
<%= h.changeCase.pascalCase(actionName) %>Action |

