import React from 'react'
import styles from './GridItem.module.css'

export const GridItem = ({title, fact, clicked}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <article className={styles.fact}>{fact}</article>
    </div>
  )
}

export default GridItem;