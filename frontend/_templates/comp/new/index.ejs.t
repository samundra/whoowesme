---
to: src/Components/<%= name.toLowerCase() %>/index.ts
---
import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>'

export default <%= h.changeCase.pascalCase(name) %>
