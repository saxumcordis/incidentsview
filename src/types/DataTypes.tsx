export interface NodeData {
  node_id: string;
  system_name: string;
  open_time: string;
  close_time: string;
  priority_code: string;
}

export interface EdgeData {
  node1: string;
  node2: string;
}
