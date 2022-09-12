import { Handle, NodeProps, Position } from "react-flow-renderer";
import { useCallback, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import useRFStore from "../store";

const handleStyle = { left: 10 };

export default function FlowInput({
  id,
  data,
}: NodeProps<{ inputFor: string }>) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputFor, setInputFor] = useState(
    data.inputFor ? data.inputFor : "text"
  );
  const updateInputNode = useRFStore().updateInputNode;

  const onChange = useCallback((evt: { target: { value: any } }) => {
    setInputFor(evt.target.value);
  }, []);
  const handleSave = () => {
    updateInputNode(id, inputFor);
    setIsEditing(false);
  };
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <div className=' bg-gray-800 p-4 rounded-md w-96'>
        {isEditing ? (
          <div>
            <input
              placeholder='Enter Input Type'
              className='textarea textarea-bordered w-full '
              onChange={onChange}
              onClick={(e) => e.stopPropagation()}
            />
            <button className='btn' onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <>
            <input
              className='input w-full pointer-events-none'
              disabled
              placeholder={inputFor}
            />
            <div
              className='cursor-pointer bg-white'
              onClick={() => setIsEditing(true)}
            >
              <AiFillEdit />
            </div>
          </>
        )}
      </div>

      <Handle type='source' position={Position.Right} />
    </>
  );
}
