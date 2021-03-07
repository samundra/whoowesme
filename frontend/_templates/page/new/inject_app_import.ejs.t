---
inject: true
to: src/App.tsx
before: "{ Provider }"
skip_if: <%= h.changeCase.pascalCase(name) %>
eof_last: false
---
import  <%= h.changeCase.pascalCase(name) -%> from 'Pages/<%= h.changeCase.pascalCase(name) -%>'
