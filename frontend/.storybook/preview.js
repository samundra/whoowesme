import React from 'react'
import { addParameters, configure, addDecorator } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

import 'antd/dist/antd.css'

configure(require.context('../src', true, /\.stories\.tsx$/), module)

// Global decorators
const styles = { padding: '10px' }
const PaddingDecorator = storyFn => <div style={styles}>{storyFn()}</div>
addDecorator(PaddingDecorator)

const extractComponentDescription = (component, { notes }) => {
  if (notes) {
    return typeof notes === 'string' ? notes : notes.markdown || notes.text
  }
  return null
}

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    extractComponentDescription: extractComponentDescription,
  },
})
