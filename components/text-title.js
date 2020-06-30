import React from 'react'
import cn from 'classnames'

import style from './text-title.module.css'

function TextTitle({ bold = true, children }) {
  return <h2 className={cn([style.title, bold && style.bold ])}>{children}</h2>
}

export default TextTitle
