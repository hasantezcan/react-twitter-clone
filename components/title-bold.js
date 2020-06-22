import React from 'react'

import style from './title-bold.module.css'

function TitleBold({children}) {
    return <h2 className={style.titleBold}>{children}</h2>
}

export default TitleBold;
