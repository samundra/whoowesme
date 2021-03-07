---
inject: true
to: src/Store/rootReducer.ts
after: "rootReducer"
eof_last: false
skip_if: <%= h.changeCase.camelCase(name).toLowerCase() %>
---
  <%= h.changeCase.camelCase(name).toLowerCase() %>: <%= h.changeCase.camelCase(name).toLowerCase() %>Reducer,
