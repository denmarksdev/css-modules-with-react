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
