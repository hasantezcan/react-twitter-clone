import React, { useState, useEffect,  } from 'react'

import '../styles/app.css'
import StoreContext from '../store'

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null)

  useEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'
    themeSet(theme)
  }, [])

  const changeTheme = (theme) => {
    themeSet(theme)
    localStorage.setItem('THEME', theme)
  }

  useEffect(() => {
    if (!subTheme) return
    const $html = document.querySelector('html')
    $html.setAttribute('class', `${theme} ${subTheme}`)
  }, [theme])
  
  // subTheme
  const [subTheme, subThemeSet] = useState(null)

  useEffect(() => {
    const subTheme = localStorage.getItem('SUB_THEME') || 'blue'
    subThemeSet(subTheme)
  }, [])

  const changeSubTheme = (subTheme) => {
    subThemeSet(subTheme)
    localStorage.setItem('SUB_THEME', subTheme)
  }

  useEffect(() => {
    if (!subTheme) return
    const $html = document.querySelector('html')
    $html.setAttribute('class', `${theme} ${subTheme}`)
  }, [subTheme])

  return (
    <StoreContext.Provider
      value={{ theme, changeTheme, subTheme, changeSubTheme }}
    >
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}
