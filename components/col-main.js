import React from 'react'
import cn from 'classnames'

import styles from './col-main.module.css'

function Main({ children }) {
  return <div className={cn(styles.layout)}>{children}</div>
}

export default Main
