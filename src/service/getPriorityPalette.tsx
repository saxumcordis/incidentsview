import { NodeData } from "../types";

export const getPriorityPalette = (data: NodeData[]) => {
  const priorityCodes = data.map((e) => e.priority_code);
  return priorityCodes.filter((e, index) => index === priorityCodes.indexOf(e));
};
