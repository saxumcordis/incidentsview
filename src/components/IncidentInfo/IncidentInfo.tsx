import React from "react";
import { useHints } from "../../service/contexts";

import styles from "./IncidentInfo.module.scss";
import { useData } from "../../service/contexts";
import { COLORS } from "../../assets/COLORS";
import {TimeInfo} from "../TimeInfo";

export const IncidentInfo = () => {
  const { incidentHovered } = useHints();
  const { data } = useData();
  const edges = data!.edges;
  const incident = data!.nodes.find((e) => e.node_id === incidentHovered);

  const parent = edges.find((e) => e.node2 === incidentHovered);
  const children = edges
    .filter((e) => e.node1 === incidentHovered)
    ?.map((e) => e?.node2);

  return (
    <div className={styles.incidentInfoContainer}>
      {!!incident && (
        <>
          <span>{`Инцидент: ${incident.node_id}`}</span>
          <span>{`Система: ${incident.system_name}`}</span>
          <span>
            Приоритет:{" "}
            <span
              style={{
                background: COLORS[incident.priority_code[0]],
                color: "#000",
              }}
            >
              {incident.priority_code}
            </span>
          </span>
          <br />
          {parent && <span>Родитель: {parent.node1}</span>}
          {!!children.length && <span>Дети: {children.join(",")}</span>}
        </>
      )}
      <TimeInfo />
    </div>
  );
};
