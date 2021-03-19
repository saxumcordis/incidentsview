import React from "react";

import { useHints } from "../../service/contexts";
import moment from "moment";

import styles from "./TimeInfo.module.scss";

export const TimeInfo = () => {
  const { datesHovered } = useHints();

  return (
    <div className={styles.timeInfoContainer}>
      {datesHovered &&
        datesHovered.map((date, i) => {
          const dateMoment = moment(date);
          const isRange = datesHovered.length === 2;
          return (
            <div className={styles.dateContainer}>
              {isRange ? (i === 0 ? "Начало" : "Конец") : null}
              <span>{`Дата: ${dateMoment.calendar()}`}</span>
              <span>{`Время: ${[
                dateMoment.hours(),
                dateMoment.minute(),
                dateMoment.seconds(),
              ]
                .map((e) => (+e < 10 ? "0" + e : e))
                .join(":")}`}</span>
            </div>
          );
        })}
    </div>
  );
};
