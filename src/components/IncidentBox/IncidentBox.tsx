import { NodeData } from "../../types";
import React from "react";
import { useData } from "../../service/contexts";

import styles from "./IncidentBox.module.scss";
import { COLORS } from "../../assets/COLORS";
import { useHints } from "../../service/contexts";

type Props = {
  incident: NodeData;
};

export const IncidentBox: React.FC<Props> = ({ incident }) => {
  const { acNamesPalette, steps, uniqueDates } = useData();

  const {
    isVisibleAllPriorities,
    visiblePriorities,
    priorityHovered,
    setDatesHovered,
    acNameHovered,
    isVisibleAllAcNames,
    visibleAcNames,
    datesHovered,
    setIncidentHovered,
  } = useHints();

  const index = acNamesPalette!.indexOf(incident!.system_name);
  const leftMargin =
    steps![1] * uniqueDates!.indexOf(Date.parse(incident!.open_time)) + "%";
  const topMargin = steps![0] * (index + 1) + "%";
  const period =
    uniqueDates!.indexOf(Date.parse(incident!.close_time)) -
    uniqueDates!.indexOf(Date.parse(incident!.open_time));
  const width = period * steps![1] + "%";
  const priorityColor = COLORS[incident.priority_code[0]];
  if (
    (!isVisibleAllPriorities &&
      !visiblePriorities?.includes(incident.priority_code)) ||
    (!isVisibleAllAcNames && !visibleAcNames?.includes(incident.system_name))
  )
    return null;

  const isNoneHovered = !priorityHovered && !acNameHovered && !datesHovered;
  const isPriorityOrAcNamehHovered =
    priorityHovered === incident.priority_code ||
    acNameHovered === incident.system_name;
  const isDateHovered = [
    Date.parse(incident.open_time),
    Date.parse(incident.close_time),
    false,
  ].includes(datesHovered?.[0] || true);

  return (
    <span
      id={incident.node_id}
      className={styles.incidentBox}
      style={{
        top: topMargin,
        left: leftMargin,
        width: width,
        background: priorityColor,
        height: steps![0] + "px",
        opacity:
          isNoneHovered || isPriorityOrAcNamehHovered || isDateHovered
            ? 1
            : 0.4,
        boxShadow:
          isPriorityOrAcNamehHovered || isDateHovered
            ? "1px 2px 2px black"
            : "",
      }}
      onMouseEnter={() => {
        setDatesHovered!([
          Date.parse(incident.open_time),
          Date.parse(incident.close_time),
        ]);
        setIncidentHovered!(incident.node_id);
      }}
      onMouseLeave={() => {
        setDatesHovered!(undefined);
        setIncidentHovered!(undefined);
      }}
    />
  );
};
