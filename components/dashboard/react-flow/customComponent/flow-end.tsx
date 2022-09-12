import { Handle, NodeProps, Position } from "react-flow-renderer";
import { useCallback } from "react";

const handleStyle = { left: 10 };

export default function FlowEnd({ id, data }: NodeProps<{ text: string }>) {
  console.log(data);
  const onChange = useCallback((evt: { target: { value: any } }) => {
    console.log(evt.target.value);
  }, []);
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <div className='bg-red-600 text-white text-bold p-4 rounded-md'>
        <div>Thankyou for Having a conversation</div>
      </div>
      <Handle type='source' position={Position.Right} />
    </>
  );
}
