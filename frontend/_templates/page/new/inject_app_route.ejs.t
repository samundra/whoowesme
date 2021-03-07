---
inject: true
to: src/App.tsx
before: "{Dashboard}"
eof_last: false
---
<Route path="<%= routePath %>" component={<%= h.changeCase.pascalCase(name) -%>} />
