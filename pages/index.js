import React from 'react'

import Layout from '../components/layout'
import useWindowSize from '../components/hooks/useWindowsSize'

function HomePage() {
  const size = useWindowSize();

  return (
    <Layout>
      <div flat={size.width < 1270 }>sidebar</div>
      <div>{JSON.stringify(size)}</div>
      {size.width > 980 && <div>extra</div>}
    </Layout>
  )
}

export default HomePage
