import { useData } from "../../service/contexts";
import { useHints } from "../../service/contexts";
import React, { useCallback, useLayoutEffect, useRef } from "react";
import styles from "./VerticalLine.module.scss";

export const VerticalLine = () => {
  const { acNamesPalette, steps } = useData();

  const {
    visibleAcNames,
    setVisibleAcNames,
    isVisibleAllAcNames,
    setVisibleAllAcNames,
    acNameHovered,
    setAcNameHovered,
  } = useHints();

  const verticalLineRef = useRef<HTMLDivElement>(null);

  const handleAcNameVisible = useCallback(
    (priority) => {
      if (visibleAcNames?.includes(priority))
        setVisibleAcNames?.(visibleAcNames.filter((e) => e !== priority));
      else setVisibleAcNames?.(visibleAcNames!.concat([priority]));
    },
    [visibleAcNames, setVisibleAcNames]
  );

  useLayoutEffect(() => {
    verticalLineRef?.current?.style.setProperty(
      "--after-height",
      5 + acNamesPalette!.length * steps![0] + "%"
    );
  });

  const handleAllAcNamesVisible = useCallback(() => {
    setVisibleAllAcNames!(!isVisibleAllAcNames);
  }, [setVisibleAllAcNames, isVisibleAllAcNames]);
  return (
    <div className={styles.verticalLine} ref={verticalLineRef}>
      <span className={styles.verticalText} onClick={handleAllAcNamesVisible}>
        {isVisibleAllAcNames ? "Назад" : "Показать все"}
      </span>
      {acNamesPalette?.map((e, i) => {
        const isAcNameVisible =
          isVisibleAllAcNames || visibleAcNames?.includes(e);
        return (
          <span
            key={i}
            className={styles.verticalText}
            style={{
              top: steps![0] * (i + 1) + "%",
              opacity: !acNameHovered || acNameHovered === e ? 1 : 0.5,
              textDecoration: isAcNameVisible ? "" : "line-through",
            }}
            onClick={() => handleAcNameVisible(e)}
            onMouseEnter={() => setAcNameHovered!(e)}
            onMouseLeave={() => setAcNameHovered!(undefined)}
          >
            {e}
          </span>
        );
      })}
    </div>
  );
};
