import {Node,Edge} from "react-flow-renderer"
export const initialNodes: Node[] = [
    {
      id: "source",
      type: "flowStart",
      data: { label: "Source" },
      position: { x: 5, y: 5 },
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
      type: "flowEnd",
      data: { label: "End" },
      position: { x: 100, y: 100 },
      className: "end",
    },
    {
      id: "5",
      type: "flowEnd",
      data: { label: "End" },
      position: { x: 100, y: 200 },
      className: "end-2",
    },
  
    {
      id: "6",
      type: "flowButton",
      position: { x: 300, y: 300 },
      data: { value: 123 },
    },
    {
      id: "7",
      type: "flowInput",
      position: { x: 100, y: 300 },
      data: { value: 123 },
    },
    {
      id: "8",
      type: "flowMessage",
      position: { x: 10, y: 300 },
      data: { value: 123 },
    },
  
    {
      id: "9",
      type: "group",
      position: { x: 300, y: 400 },
      data: { label: "Well" },
      style: {
        width: "400px",
        height: "250px",
        padding: "2rem",
        background: "black",
      },
    },
    {
      id: "10",
      position: { x: 10, y: 10 },
      type: "flowMessage",
      data: { label: null },
      parentNode: "9",
      extent: "parent",
    },
    {
      id: "11",
      position: { x: 10, y: 120 },
      type: "flowInput",
      data: { label: null },
      parentNode: "9",
      extent: "parent",
    },
  
    {
      id: "13",
      position: { x: 420, y: 520 },
      type: "flowCheckbox",
      data: { label: null },
    },
    {
      id: "14",
      position: { x: 520, y: 620 },
      type: "flowRadio",
      data: { label: null },
    },
  ];
  
  export const initialEdges: Edge[] = [
    { id: "e1-2", source: "source", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e2-end", source: "2", target: "4" },
    { id: "e3-end-2", source: "3", target: "5" },
  ];