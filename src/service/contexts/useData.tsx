import { EdgeData, NodeData } from "../../types";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getGraphData,
  getPriorityPalette,
  getDateRange,
  getAcNamesPalette,
} from "../";

export type TData = {
  nodes: NodeData[];
  edges: EdgeData[];
};

type TDataContext = {
  data: TData | null;
  dates: number[];
  uniqueDates: number[];
  beginDate: number;
  endDate: number;
  priorityPalette: string[];
  acNamesPalette: string[];
  steps: number[];
  setSteps: (value: number[]) => void;
  minWidth: number;
  setMinWidth: (value: number) => void;
  minHeight: number;
  setMinHeight: (value: number) => void;
  setLoadedData: (value?: TData) => void;
  setData: (value: TData) => void;
};

export const DataContext = createContext<Partial<TDataContext>>({
  data: null,
});

export const DataProvider: React.FC = ({ children }) => {
  const initialData = getGraphData();

  const [loadedData, setLoadedData] = useState<TData | undefined>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<TData>(initialData);

  const priorityPalette = getPriorityPalette(data.nodes).sort(
    (a, b) => +a[0] - +b[0]
  );
  const acNamesPalette = getAcNamesPalette(data.nodes);

  const dates = data.nodes
    .map((e) => Date.parse(e.open_time))
    .concat(data.nodes.map((e) => Date.parse(e.close_time)))
    .sort((a, b) => a - b);
  const uniqueDates = dates.filter((e, i) => dates.indexOf(e) === i);
  const [beginDate, endDate] = getDateRange(data.nodes);

  const [minWidth, setMinWidth] = useState(100);

  const [minHeight, setMinHeight] = useState(100);

  const [steps, setSteps] = useState([
    Math.ceil(minHeight / acNamesPalette.length),
    Math.ceil(minWidth / uniqueDates.length),
  ]);

  useEffect(() => {
    if (steps[1] * uniqueDates.length !== minWidth) {
      setMinWidth(minWidth + 1);
    }
  }, [uniqueDates, minWidth, steps, setMinWidth]);

  useEffect(() => {
    if (steps[0] * acNamesPalette.length !== minHeight) {
      setMinHeight(minHeight + 1);
    }
  }, [acNamesPalette, steps, minHeight, setMinHeight]);

  const value = {
    data: loadedData ? loadedData : data,
    uniqueDates,
    dates,
    beginDate,
    endDate,
    steps,
    setSteps,
    priorityPalette,
    acNamesPalette,
    minWidth,
    setMinWidth,
    minHeight,
    setMinHeight,
    setLoadedData,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
