import { nanoid } from "nanoid";
import { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  ReactFlowInstance,
  ReactFlowProvider,
} from "react-flow-renderer";
import {
  FlowButton,
  FlowCheckbox,
  FlowEnd,
  FlowInput,
  FlowMessage,
  FlowRadio,
  FlowStart,
} from "./customComponent";
import RfComponentSidebar from "./RFComponentSidebar";
import useRFStore from "./store";

export default function FlowRenderer() {
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>();
  const Nodes = useRFStore().nodes;
  const Edges = useRFStore().edges;
  const onNodesChange = useRFStore().onNodesChange;
  const onEdgesChange = useRFStore().onEdgesChange;
  const onConnect = useRFStore().onConnect;
  const addNode = useRFStore().addNode;
  const reactFlowWrapper = useRef(null);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const reactFlowBounds = event.currentTarget.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) return;
      if (reactFlowInstance) {
        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
          id: nanoid(10),
          type,
          position,
          data: {
            label: `${type} node`,
            run: function (id: string, fun: Function) {
              console.log(id);
              fun();
            },
          },
        };
        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  // console.log(Serialize(Nodes, Edges));

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
    <div className='w-full h-full flex'>
      <ReactFlowProvider />
      <div>
        <RfComponentSidebar />
      </div>
      <ReactFlow
        ref={reactFlowWrapper}
        nodes={Nodes}
        edges={Edges}
        fitView
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        deleteKeyCode={"Backspace"}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Background
          variant={BackgroundVariant.Lines}
          gap={80}
          size={1}
          className='bg-gray-600'
        />
      </ReactFlow>
      <ReactFlowProvider />
    </div>
  );
}
