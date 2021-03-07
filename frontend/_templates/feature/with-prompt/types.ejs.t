---
to: src/Store/<%= h.changeCase.pascalCase(name).toLowerCase() %>/types.ts
---
export const <%= h.changeCase.snakeCase(name).toUpperCase() %>_ACTION = 'SAMPLE_ACTION'

type <%= h.changeCase.pascalCase(name) %>ActionPayload = any

interface <%= h.changeCase.pascalCase(name) %>Action {
  type: typeof <%= h.changeCase.snakeCase(name).toUpperCase() %>_ACTION
  payload: <%= h.changeCase.pascalCase(name) %>ActionPayload
}

export type <%= h.changeCase.pascalCase(name) %>ActionTypes = |
  <%= h.changeCase.pascalCase(name) %>Action
