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
      <ThemeButton big full>
        Tweet
      </ThemeButton>
      <ProfileBox />
    </div>
  )
}

export default Sidebar
