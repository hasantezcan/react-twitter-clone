import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './navigation-button.module.css'

function NavigationButton({ selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default NavigationButton
