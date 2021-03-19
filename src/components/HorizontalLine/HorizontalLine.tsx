import { useData } from "../../service/contexts";
import { useHints } from "../../service/contexts";
import styles from "./HorizontalLine.module.scss";
import moment from "moment";
import React from "react";

export const HorizontalLine = () => {
  const { uniqueDates, steps, acNamesPalette, minWidth } = useData();

  const { datesHovered, setDatesHovered } = useHints();

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.horizontalLine}
        style={{
          top: 5 + acNamesPalette!.length * steps![0] + "%",
          minWidth: 8 * minWidth! + "px",
        }}
      >
        {uniqueDates?.map((e, i) => (
          <span
            key={i}
            className={styles.horizontalText}
            style={{
              left: steps![1] * i + "%",
              opacity: !datesHovered || datesHovered.includes(e) ? 1 : 0.3,
            }}
            onMouseEnter={() => setDatesHovered!([e])}
            onMouseLeave={() => setDatesHovered!(undefined)}
          >
            {moment(e).calendar()}
            <br />
            <br />
            {[moment(e).hour(), moment(e).minute()]
              .map((e) => (+e < 10 ? "0" + e : e))
              .join(":")}
          </span>
        ))}
      </div>
    </div>
  );
};
