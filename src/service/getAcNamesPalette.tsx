import { NodeData } from "../types";

export const getAcNamesPalette = (data: NodeData[]) => {
  const acNames = data.map((e) => e.system_name);
  return acNames.filter((e, index) => index === acNames.indexOf(e));
};
