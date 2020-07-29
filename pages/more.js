import React from 'react'

import Layout from '../components/layout'
import ThemeSelect from '../components/theme-select'
import SubThemeSelect from '../components/subTheme-select '

function MorePage() {
  return (
    <Layout>
      <p>Color</p>
      <SubThemeSelect />
      <p>Background</p>
      <ThemeSelect />
    </Layout>
  )
}

export default MorePage
