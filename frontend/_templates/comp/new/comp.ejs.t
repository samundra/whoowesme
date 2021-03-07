---
to: src/Components/<%= name.toLowerCase() %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
import * as React from 'react'
<% if (locals.styled) { -%>
import styled from 'styled-components'
<% } -%>

type Props = {}

const <%= h.changeCase.pascalCase(name) %>: React.FunctionComponent<Props> = () => {
<% if (locals.styled) { -%>
  return <StyledDiv className="<%= h.changeCase.paramCase(name) %>">your component <%=name %></StyledDiv>
<% } else { -%>
  return <div className="<%= h.changeCase.paramCase(name) %>">your component <%=name %></div>
<% } -%>
}
<% if (locals.styled) { -%>
const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`
<% } -%>

export default <%= h.changeCase.pascalCase(name) %>
