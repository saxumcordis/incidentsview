import React from "react";

import styles from "./GraphContainer.module.scss";
import { useData } from "../../service/contexts";
import { IncidentBox } from "../IncidentBox";
import { Arrows } from "../Arrows";
import { HorizontalLine } from "../HorizontalLine";
import { VerticalLine } from "../VerticalLine";

export const GraphContainer = () => {
  const { data, minHeight, minWidth } = useData();

  return (
    <div
      className={styles.container}
      style={{
        minWidth: 8 * minWidth! + "px",
        maxHeight: 9 * minHeight! + "px",
      }}
    >
      <VerticalLine />
      <HorizontalLine />
      <div
        className={styles.incidentBoxesContainer}
        style={{
          minWidth: 8 * minWidth! + "px",
          minHeight: 9 * minHeight! + "px",
        }}
      >
        {data?.nodes &&
          data.nodes.map((e, i) => <IncidentBox key={i} incident={e} />)}
      </div>
      <Arrows />
    </div>
  );
};
