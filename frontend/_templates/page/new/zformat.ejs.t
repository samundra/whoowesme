---
to: null
sh: eslint_d --fix
  \src/App.tsx
  \src/Pages/index.ts
  \src/Pages/<%= h.changeCase.pascalCase(name) %>.tsx
---
