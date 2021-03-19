import { EdgeData, NodeData } from "../types";

const JSON = {
  "nodes": [
    {
      "node_id": "M0097217939",
      "system_name": "Интеграционная платформа Связь",
      "open_time": "2021-02-17 07:20:23",
      "close_time": "2021-02-18 08:00:00",
      "priority_code": "5. Низкий"
    },
    {
      "node_id": "M0097224472",
      "system_name": "Единая Система Визуализации",
      "open_time": "2021-02-17 09:20:51",
      "close_time": "2021-02-17 17:23:22",
      "priority_code": "3. Высокий"
    },
    {
      "node_id": "M0097218418",
      "system_name": "Система Онлайн Платежей",
      "open_time": "2021-02-17 07:28:57",
      "close_time": "2021-02-17 08:07:44",
      "priority_code": "3. Высокий"
    },
    {
      "node_id": "M0097256441",
      "system_name": "Центр решений",
      "open_time": "2021-02-18 07:58:42",
      "close_time": "2021-02-18 14:22:40",
      "priority_code": "4. Средний"
    },
    {
      "node_id": "M0097227095",
      "system_name": "Система Онлайн Платежей",
      "open_time": "2021-02-17 10:20:59",
      "close_time": "2021-02-17 11:00:00",
      "priority_code": "1. Критический"
    },
    {
      "node_id": "M0097227458",
      "system_name": "Центр решений",
      "open_time": "2021-02-17 10:27:33",
      "close_time": "2021-02-17 11:00:00",
      "priority_code": "1. Критический"
    },
    {
      "node_id": "M0097229834",
      "system_name": "Электронный документ",
      "open_time": "2021-02-17 11:29:01",
      "close_time": "2021-02-17 16:06:33",
      "priority_code": "4. Средний"
    },
    {
      "node_id": "M0097218098",
      "system_name": "MIST",
      "open_time": "2021-02-17 07:22:42",
      "close_time": "2021-02-17 08:13:18",
      "priority_code": "4. Средний"
    }
  ],
  "edges": [
    {
      "node1": "M0097217939",
      "node2": "M0097224472"
    },
    {
      "node1": "M0097218418",
      "node2": "M0097217939"
    },
    {
      "node1": "M0097224472",
      "node2": "M0097256441"
    },
    {
      "node1": "M0097227095",
      "node2": "M0097227458"
    },
    {
      "node1": "M0097227458",
      "node2": "M0097229834"
    },
    {
      "node1": "M0097218418",
      "node2": "M0097218098"
    }
  ]
} as { nodes: NodeData[]; edges: EdgeData[] };

export const getGraphData = () => {
  return JSON;
};
