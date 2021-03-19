import React, { useCallback } from "react";
import { useData } from "../../service/contexts";

import styles from "./Legend.module.scss";
import { COLORS } from "../../assets/COLORS";
import { useHints } from "../../service/contexts";

export const Legend = () => {
  const { priorityPalette } = useData();
  const {
    visiblePriorities,
    isVisibleAllPriorities,
    setVisibleAllPriorities,
    setVisiblePriorities,
    priorityHovered,
    setPriorityHovered,
  } = useHints();

  const handlePriorityVisible = useCallback(
    (priority) => {
      if (visiblePriorities?.includes(priority))
        setVisiblePriorities?.(visiblePriorities.filter((e) => e !== priority));
      else {setVisiblePriorities?.(visiblePriorities!.concat([priority]));}
    },
    [visiblePriorities, setVisiblePriorities]
  );

  const handleAllPriorityVisible = useCallback(() => {
    if (isVisibleAllPriorities)
      setVisiblePriorities!([])
    setVisibleAllPriorities!(!isVisibleAllPriorities);
  }, [setVisibleAllPriorities, isVisibleAllPriorities, setVisiblePriorities]);

  return (
    <div className={styles.legendContainer}>
      {priorityPalette!.map((priority, i) => {
        const isPriorityVisible =
          isVisibleAllPriorities || visiblePriorities?.includes(priority);

        return (
          <div
            key={i}
            className={styles.priorityBox}
            onClick={() => handlePriorityVisible(priority)}
            onMouseEnter={() => setPriorityHovered!(priority)}
            onMouseLeave={() => setPriorityHovered!(undefined)}
            style={
              !priorityHovered || priorityHovered === priority
                ? { opacity: 1, boxShadow: "FFC900FF" }
                : { opacity: 0.5 }
            }
          >
            <span
              className={styles.colorCircle}
              style={{
                background: COLORS[priority[0]],
                opacity: !isPriorityVisible ? 0.8 : 1,
              }}
            />
            <label
              className={styles.priorityText}
              style={
                !isPriorityVisible ? { textDecoration: "line-through" } : {}
              }
            >
              {priority}
            </label>
          </div>
        );
      })}
      <div className={styles.priorityBox} onClick={handleAllPriorityVisible}>
        <span className={styles.colorCircle} />
        <label className={styles.priorityText}>
          {isVisibleAllPriorities ? "Скрыть все" : "Показать все"}
        </label>
      </div>
    </div>
  );
};
