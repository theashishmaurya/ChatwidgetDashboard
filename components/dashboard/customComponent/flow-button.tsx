import { Handle, Position } from "react-flow-renderer";
import { useCallback } from "react";

const handleStyle = { left: 10 };

export default function FlowButton({ data }: any) {
  console.log(data);
  const onChange = useCallback((evt: { target: { value: any } }) => {
    console.log(evt.target.value);
  }, []);
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <div className='btn'>{data.value}</div>

      <Handle type='source' position={Position.Right} id='a' />
    </>
  );
}
