import React from 'react'

import styles from './App.module.scss'

export const App = () => {
  const text = 'App component'
  return <div className={styles.App}>{text}</div>
}
