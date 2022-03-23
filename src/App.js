import React, { useState } from "react";
import Title from "./components/Title/Title";
import Background from "./components/Background/Background";
import Grid from "./components/Grid/Grid";
import Rocket from "./components/Rocket/Rocket";
import Smoke from "./components/Rocket/Smoke";

import styles from './App.module.css';

// Data
import data from "./data/NASA_facts.json";

function App() {
  const [facts] = useState(data);

  return (
    <div className={styles.App}>
       <Title />
      <Background />
      <Grid facts={facts} />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
