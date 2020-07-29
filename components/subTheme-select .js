import React, { useContext } from 'react'

import styles from './subTheme-select.module.css'
import StoreContext from '../store'

const SUB_THEME = {
  blue: 'Blue',
  yellow: 'Yellow',
  pink: 'Pink',
  purple: 'Purple',
  orange: 'Orange',
  green: 'Green'
}

function SubThemeSelect() {
  const store = useContext(StoreContext)

  return (
    <div className={styles.container}>
      {Object.keys(SUB_THEME).map((subTheme) => (
        <label className={styles.label}>
          <input
            type="radio"
            value={subTheme}
            name={subTheme}
            checked={subTheme === store.subTheme}
            onChange={(e) => store.changeSubTheme(e.target.value)}
          />
          {subTheme}
        </label>
      ))}
    </div>
  )
}

export default SubThemeSelect
