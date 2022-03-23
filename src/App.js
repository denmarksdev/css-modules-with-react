import React, { useState } from "react";
import Title from "./Title/Title";
import Background from "./Background/Background";
import Grid from "./Grid/Grid";
import Rocket from "./Rocket/Rocket";
import Smoke from "./Rocket/Smoke";

import styles from './App.module.css';

// Data
import data from "./data/NASA_facts.json";

function App() {
  const [facts, setFacts] = useState(data);

  const onUpdateClicked = (id) => {
    const copyFacts = [...facts];
    const indexFact = copyFacts.findIndex((f) => f.id === id);
    if (indexFact === -1) return;

    // Flip between badge or explore image
    copyFacts[indexFact].clicked = !copyFacts[indexFact].clicked;
    setFacts(copyFacts);
  };

  return (
    <div className={styles.App}>
       <Title />
      <Background />
      <Grid facts={facts} onUpdateClicked={onUpdateClicked} />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
