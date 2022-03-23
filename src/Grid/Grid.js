import React from "react";
import GridItem from "./GridItem";
import cx from "classnames";

import styles from "./Grid.module.css";
import mediaStyles from "./Media.module.css";

export const Grid = ({ facts, onUpdateClicked }) => {
  const gridItems = facts.map((fact) => (
    <GridItem key={fact.id} {...fact} onUpdateClicked={onUpdateClicked} />
  ));

  return (
    <section className={cx(styles.grid, mediaStyles.grid)}>{gridItems}</section>
  );
};

export default Grid;
