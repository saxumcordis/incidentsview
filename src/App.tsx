import React from "react";
import { GraphContainer } from "./components/GraphContainer";

import { DataProvider } from "./service/contexts/useData";
import { Legend } from "./components/Legend";
import { HintsProvider } from "./service/contexts/useHints";
import { IncidentInfo } from "./components/IncidentInfo";
import { DropZone } from "./components/DropZone";

import styles from './index.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <DataProvider>
        <HintsProvider>
          <div className={styles.column}> <Legend /><IncidentInfo /></div>
          <div className={styles.column}><GraphContainer /></div>
          <DropZone />
        </HintsProvider>
      </DataProvider>
    </div>
  );
};

export default App;
