---
to: src/Pages/<%= h.changeCase.pascalCase(name) %>.tsx
---
import React from 'react'

type Props = {}

const <%= h.changeCase.pascalCase(name) %>: React.FunctionComponent<Props> = () => {
  return <div>Page Content Here</div>
}

export default <%= h.changeCase.pascalCase(name) %>

