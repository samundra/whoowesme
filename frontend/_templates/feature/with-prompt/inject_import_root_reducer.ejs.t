---
inject: true
to: src/Store/rootReducer.ts
eof_last: false
before: 'const rootReducer'
---
import { <%= h.changeCase.camelCase(name).toLowerCase() %>Reducer } from './<%= h.changeCase.camelCase(name).toLowerCase() %>/reducer'
