import { Edge, Node } from "react-flow-renderer";
import { initialEdges, initialNodes } from "./data";

const setData = (nodes: Node[], edges: Edge[]) => {
  localStorage.setItem("react-flow", JSON.stringify({ nodes, edges }));
};

const getData = () => {
  const data = localStorage.getItem("react-flow");

  return data
    ? (JSON.parse(data) as {
        nodes: Node<any>[];
        edges: Edge<any>[];
      })
    : { nodes: initialNodes, edges: initialEdges };
};

export { setData, getData };
