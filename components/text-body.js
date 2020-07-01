import React from 'react'
import cn from 'classnames'

import style from './text-body.module.css'

function TextBody({ bold = false, className, children, ...props }) {
  return (
    <span
      className={cn([style.body, bold && style.bold, className])}
      {...props}
    >
      {children}
    </span>
  )
}

export default TextBody
