import React from 'react'

import Index from '../components/layout'
import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Hasan Tezcan"
        slug="hasantezcan"
        datetime={new Date('2020-08-23')}
        text={`Merhaba Dünya    ,,
    
    
    asdasd`}
      ></Tweet>
      <Tweet
        name="Hasan Tezcan"
        slug="hasantezcan"
        datetime={new Date('2020-08-23')}
        text={`Herkese merhaba,

"CPU Scheduling" hakkında hem konu anlatımlı hem de soru çözümlü bir yazı yayımladım. Benim için ileriye dönük güzel bir not oldu kendisi. Önümüzdeki günlerde de operating systems konularına dair yazılar paylaşmaya devam edeceğim.🚀`}
      ></Tweet>
    </Layout>
  )
}

export default HomePage
