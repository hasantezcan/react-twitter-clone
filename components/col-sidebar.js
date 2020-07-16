import React from 'react'
import cn from 'classnames'

import Navigation from '../components/navigation'
import ThemeButton from '../components/theme-button'
import ProfileBox from '../components/profile-box'

import styles from './col-sidebar.module.css'

function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton big full={!flat}>
          {flat ? 'a' : 'Tweet'}
        </ThemeButton>
      </div>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Sidebar
