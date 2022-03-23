import React from "react";
import styles from "./Smoke.module.css";
import SmokeMov from '../media/smoke.mov';

export const Smoke = () => (
  <div className={styles.smoke}>
    <video className={styles.video} autoPlay loop src={SmokeMov} />
  </div>
);

export default Smoke;
