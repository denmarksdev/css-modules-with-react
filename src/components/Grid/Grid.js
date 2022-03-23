import React from "react";
import GridItem from "./GridItem";

import styles from "./Grid.module.css";

export const Grid = ({ facts, onUpdateClicked }) => {
  const gridItems = facts.map((fact) => (
    <GridItem key={fact.id} {...fact} onUpdateClicked={onUpdateClicked} />
  ));

  return <section className={styles.grid}>{gridItems}</section>;
};

export default Grid;
