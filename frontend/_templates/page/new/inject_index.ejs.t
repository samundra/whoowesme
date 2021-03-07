---
inject: true
to: src/Pages/index.ts
after: PageNotFound
skip_if: <%= h.changeCase.pascalCase(name) %>
sh: eslint_d --fix src/Pages/index.ts
---
export { default as <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) -%>'
