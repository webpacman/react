import React from 'react'

import styles from './App.module.scss'

export const App = (): React.JSX.Element => {
  const text = 'App component'
  return <div className={styles.App}>{text}</div>
}
