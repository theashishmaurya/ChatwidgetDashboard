import { FormEvent, useRef, useState } from "react";
import Message from "../../components/dashboard/preview/message";
import useRFStore from "../../components/dashboard/react-flow/store";
import { ParseNodes } from "../../components/dashboard/utils/ParseNodes";
import { Node } from "react-flow-renderer";

export default function Preview() {
  const [messages, setMessages] = useState<any>([
    { by: "bot", message: "Hello, I am a bot. How can I help you today?" },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const Node = useRFStore().nodes;
  const Edge = useRFStore().edges;
  const { SerializedGraph, DataMap } = ParseNodes(Node, Edge);

  const displayMessage = (id: string) => {};

  const findEndNodes = (Nodes: Node[]) => {
    let EndNodes = new Map();
    for (let i = 0; i < Nodes.length; i++) {
      if (Nodes[i]?.type === "end") {
        EndNodes.set(Nodes[i], "end");
      }
    }
    return EndNodes;
  };

  let Reactchildren = `<div> yeap</div>`;
  const Travel = () => {
    let EndNodes = findEndNodes(Node);
    let visited = new Map();

    // while (true) {
    let stack: string[] = [];
    stack.push("source");

    while (stack.length > 0) {
      let currNode = stack.pop() as string;

      if (!visited.has(currNode)) {
        visited.set(currNode, true);

        return DataMap.get(currNode)?.component as string;

        // setMessages((prev: any) => [...prev, DataMap.get(currNode)?.component]);
      }

      let children = SerializedGraph.get(currNode);

      if (children) {
        for (let i = 0; i < children.length; i++) {
          stack.push(children[i]);
        }
      }
    }
  };

  //////////////////////////////////2nd approach///////////////////////////////

  // const ref = useRef<HTMLDivElement>(null);

  // if (typeof window !== "undefined") {
  //   const MutationObserver = window.MutationObserver;
  //   const observer = new MutationObserver((mutations) => {
  //     mutations.forEach((mutation) => {
  //       console.log(mutation);
  //     });
  //   });

  //   const config = { attributes: true, childList: true, characterData: true };

  //   if (ref && typeof ref.current != null) {
  //     console.log(ref);
  //     observer.observe(ref.current, config);
  //   }
  // }

  let currentMessage = "source";

  const nextMessage = (currentMessage: string) => {
    let children = SerializedGraph.get(currentMessage);
    console.log(children);

    if (children) {
      for (let i = 0; i < children.length; i++) {
        setMessages((prev: any) => [
          ...prev,
          { by: "bot", message: DataMap.get(children[i].target)?.component },
        ]);
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let input = inputRef.current?.value;

    console.log(input);
    setMessages((prev: any) => [...prev, { by: "user", message: input }]);
    inputRef.current!.value = "";
    nextMessage(currentMessage);
  };

  return (
    <div className='flex justify-center flex-col'>
      <div className='w-[50%] border-2 h-[90vh] flex flex-col overflow-y'>
        {messages.map((message: any, index: number) => (
          <div>
            <Message key={index} message={message.message} by={message.by} />
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            name='input'
            className='input bg-gray-200'
            ref={inputRef}
          />
          <button className='btn'>Send</button>
        </form>
      </div>
    </div>
  );
}
