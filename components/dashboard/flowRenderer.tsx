import { useCallback, useState } from "react";
import ReactFlow, {
  Node,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  EdgeChange,
  NodeChange,
  Connection,
  addEdge,
} from "react-flow-renderer";

const initialNodes: Node[] = [
  {
    id: "source",
    type: "start",
    data: { label: "Source" },
    position: { x: 5, y: 5 },
    // draggable: false,
    className: "source",
  },
  {
    id: "6",
    type: "group",
    data: { label: "Well" },
    position: { x: 200, y: 200 },
    // draggable: false,
    className: "source",
  },
  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: 5, y: 100 },
    className: "2",
  },
  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: 15, y: 200 },
    className: "3",
  },
  {
    id: "4",
    type: "end",
    data: { label: "End" },
    position: { x: 100, y: 100 },
    className: "end",
  },
  {
    id: "5",
    type: "end",
    data: { label: "End" },
    position: { x: 100, y: 200 },
    className: "end-2",
  },
  {
    id: "5",
    type: "end",
    data: { label: "End" },
    position: { x: 200, y: 200 },
    className: "end-2",
    parentNode: "6",
    extent: "parent",
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "source", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e2-end", source: "2", target: "4" },
  { id: "e3-end-2", source: "3", target: "5" },
];

export default function FlowRenderer() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  //   Traverse(edges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    />
  );
}
