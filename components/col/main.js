import React from 'react'
import cn from 'classnames'

import styles from './main.module.css'

function Main({ children }) {
  return <div className={cn(styles.main)}>{children}</div>
}

export default Main
