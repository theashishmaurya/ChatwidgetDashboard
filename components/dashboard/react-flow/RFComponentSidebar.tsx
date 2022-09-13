import { DragEvent } from "react";

export default function RfComponentSidebar() {
  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const nodeTypes = [
    "flowStart",
    "flowMessage",
    "flowInput",
    "flowCheckbox",
    "flowRadio",
    "flowButton",
    "flowEnd",
  ];

  return (
    <div>
      <div className='flex flex-col w-60 h-screen'>
        <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-2.2rem)] bg-gray-800'>
          {nodeTypes.map((nodeType, index) => (
            <div
              className='py-4 px-4 m-4 rounded-md bg-white w-40 cursor-grab'
              onDragStart={(event) => onDragStart(event, nodeType)}
              draggable
              key={index + 1}
            >
              <div className='font-bold'>{nodeType}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
