---
to: src/Store/<%= h.changeCase.camelCase(name).toLowerCase() %>/reducer.ts
---
import produce from 'immer'
import {
  <%= h.changeCase.pascalCase(name) %>ActionTypes,
  <%= h.changeCase.snakeCase(name).toUpperCase() %>_ACTION,
  // More types
} from './types'

const initialState = {
  // some states here
  sample: ''
}

type <%= h.changeCase.pascalCase(name) %>InitialState = typeof initialState

export function <%= h.changeCase.camelCase(name) %>Reducer(state: <%= h.changeCase.pascalCase(name) %>InitialState = initialState, action: <%= h.changeCase.pascalCase(name) %>ActionTypes) {
  return produce(state, draft => {
    switch (action.type) {
      case <%= h.changeCase.snakeCase(name).toUpperCase() %>_ACTION:
        const payload = action.payload
        draft.sample = payload

        return draft
      default:
        return state
    }
  })
}
