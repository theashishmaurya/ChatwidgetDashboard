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
  const { SerializedGraph, DataMap, getChildren } = ParseNodes(Node, Edge);

  console.log(getChildren(Edge));

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
