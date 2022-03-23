import React from "react";
import styles from "./Rocket.module.css";
import ShuttlePng from '../images/shuttle.png';

export const Rocket = () => (
    <div className={styles.smoke}>
       <img src={ShuttlePng} style={styles} alt='The Rocket'/>
    </div>
)

export default Rocket;
