import React from 'react'

import style from './text-title.module.css'

function TextTitle({children}) {
    return <h2 className={style.titleBold}>{children}</h2>
}

export default TextTitle;
