import { Handle, Position } from "react-flow-renderer";
import { useCallback } from "react";

const handleStyle = { left: 10 };

export default function FlowInput({ data }: any) {
  console.log(data);
  const onChange = useCallback((evt: { target: { value: any } }) => {
    console.log(evt.target.value);
  }, []);
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <div className=' bg-gray-800 p-4 rounded-md w-96'>
        {/**Todo get User Info such as Email phone number ets */}

        <input
          name='email'
          placeholder='email' // this comes from the Data.value.htmlFor
          className='textarea textarea-bordered w-full '
          onChange={onChange}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <Handle type='source' position={Position.Right} />
    </>
  );
}
