import React from "react";
import styles from "./GridItem.module.css";
import Explore from "./Explore";
import Badge from './Badge';

export const GridItem = ({ id, title, fact, clicked, onUpdateClicked }) => {
  return (
    <div className={styles.card} onClick={() => onUpdateClicked(id)}>
      {clicked ? <Explore/> : <Badge/> }
      <h2 className={styles.title}>{title}</h2>
      <article className={styles.fact}>{fact}</article>
    </div>
  );
};

export default GridItem;
