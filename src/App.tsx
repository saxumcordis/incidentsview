import React from "react";
import { GraphContainer } from "./components/GraphContainer";

import { DataProvider } from "./service/contexts/useData";
import { Legend } from "./components/Legend";
import { HintsProvider } from "./service/contexts/useHints";
import { TimeInfo } from "./components/TimeInfo";
import { IncidentInfo } from "./components/IncidentInfo";
import { DropZone } from "./components/DropZone";

const App = () => {
  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <DataProvider>
        <HintsProvider>
          <Legend />
          <GraphContainer />
          <TimeInfo />
          <IncidentInfo />
          <DropZone />
        </HintsProvider>
      </DataProvider>
    </div>
  );
};

export default App;
