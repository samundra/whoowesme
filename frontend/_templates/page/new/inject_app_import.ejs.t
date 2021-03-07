---
inject: true
to: src/App.tsx
before: "} from 'Pages'"
skip_if: <%= h.changeCase.pascalCase(name) %>
eof_last: false
---
  <%= h.changeCase.pascalCase(name) -%>,
