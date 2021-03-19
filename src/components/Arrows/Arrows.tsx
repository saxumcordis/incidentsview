import React, { useEffect, useState } from "react";
import { useData } from "../../service/contexts";
import Xarrow from "react-xarrows";
import { useHints } from "../../service/contexts";

export const Arrows = () => {
  const { data } = useData();
  const edges = data!.edges;
  const nodes = data!.nodes;
  const [loading, setLoading] = useState(true);

  const {
    isVisibleAllPriorities,
    visiblePriorities,
    isVisibleAllAcNames,
    visibleAcNames,
    priorityHovered,
    acNameHovered,
    datesHovered,
  } = useHints();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [setLoading]);

  if (loading) return null;

  return (
    <>
      {edges.map((edge, i) => {
        const node1 = nodes.find((e) => e.node_id === edge.node1);
        const node2 = nodes.find((e) => e.node_id === edge.node2);
        if (
          !node1 ||
          !node2 ||
          (!isVisibleAllPriorities &&
            (!visiblePriorities?.includes(node1!.priority_code) ||
              !visiblePriorities?.includes(node2!.priority_code))) ||
          (!isVisibleAllAcNames &&
            (!visibleAcNames?.includes(node1!.system_name) ||
              !visibleAcNames?.includes(node2!.system_name)))
        )
          return null;
        const isNoneHovered =
          !priorityHovered && !acNameHovered && !datesHovered;

        return (
          <Xarrow
            key={i}
            start={edge.node1}
            end={edge.node2}
            color={"black"}
            divContainerProps={{ style: { opacity: isNoneHovered ? 1 : 0.4 } }}
          />
        );
      })}
    </>
  );
};
