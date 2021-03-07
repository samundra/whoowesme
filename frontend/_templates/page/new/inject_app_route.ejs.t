---
inject: true
to: src/App.tsx
after: "{VerifyEmail}"
eof_last: false
---
<Route path="./<%= routePath %>" component={<%= h.changeCase.pascalCase(name) -%>} />
