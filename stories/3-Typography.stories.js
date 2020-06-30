import React from 'react'

import TextTitle from '../components/text-title'
import Stack from '../components/stack'

export default {
  title: 'Typography'
}

export const Typography = () => (
  <Stack column>
    <TextTitle>Merhaba Dünya</TextTitle>
    <TextTitle bold={false}>Merhaba Dünya</TextTitle>
  </Stack>
)
