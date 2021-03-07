---
to: "src/Store/<%= h.changeCase.camelCase(name).toLowerCase() %>/action.ts"
eol_last: false
---
import {
  <%= h.changeCase.pascalCase(name) %>ActionTypes,
  <%= h.changeCase.snakeCase(name).toUpperCase() %>_ACTION,
} from './types'

export function <%= h.changeCase.camelCase(name) %>Action(payload: any): <%= h.changeCase.pascalCase(name) %>ActionTypes {
  return {
    type: <%= h.changeCase.snakeCase(name).toUpperCase() %>_ACTION,
    payload: payload
  }
}
