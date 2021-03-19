import { NodeData } from "../types";

const getOpenTimes = (data: NodeData[]) => {
  return data.map((d) => Date.parse(d.open_time));
};

const getCloseTimes = (data: NodeData[]) => {
  return data.map((d) => Date.parse(d.close_time));
};

const getMinOpenData = (nodes: NodeData[]) => {
  return Math.min(...getOpenTimes(nodes));
};
const getMaxCloseData = (nodes: NodeData[]) => {
  return Math.max(...getCloseTimes(nodes));
};

export const getDateRange = (data: NodeData[]) => {
  return [getMinOpenData(data), getMaxCloseData(data)];
};
