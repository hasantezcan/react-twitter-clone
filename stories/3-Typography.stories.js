import React from 'react'

import TextTitle from '../components/text/title'
import Index from '../components/stack'

export default {
  title: 'Typography'
}

export const Typography = () => (
  <Index column>
    <TextTitle>Merhaba Dünya</TextTitle>
    <TextTitle bold={false}>Merhaba Dünya</TextTitle>
  </Index>
)
