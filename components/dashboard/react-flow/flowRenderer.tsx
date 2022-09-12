import { useCallback, useMemo, useState } from "react";
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
import { initialEdges } from "../data";
import {
  FlowButton,
  FlowCheckbox,
  FlowEnd,
  FlowInput,
  FlowMessage,
  FlowRadio,
  FlowStart,
} from "./customComponent";
import useRFStore from "./store";

export default function FlowRenderer() {
  const Nodes = useRFStore().nodes;
  const Edges = useRFStore().edges;
  const onNodesChange = useRFStore().onNodesChange;
  const onEdgesChange = useRFStore().onEdgesChange;
  const onConnect = useRFStore().onConnect;

  //   Traverse(edges);

  // const onNodesChange = useCallback(
  //   (changes: NodeChange[]) =>
  //     setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  // const onEdgesChange = useCallback(
  //   (changes: EdgeChange[]) =>
  //     setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  // const onConnect = useCallback(
  //   (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges]
  // );

  const nodeTypes = useMemo(
    () => ({
      flowButton: FlowButton,
      flowStart: FlowStart,
      flowMessage: FlowMessage,
      flowEnd: FlowEnd,
      flowInput: FlowInput,
      flowCheckbox: FlowCheckbox,
      flowRadio: FlowRadio,
    }),
    []
  );

  return (
    <ReactFlow
      nodes={Nodes}
      edges={Edges}
      fitView
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    />
  );
}
