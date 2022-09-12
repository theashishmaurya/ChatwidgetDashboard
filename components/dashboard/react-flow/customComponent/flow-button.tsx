import { Handle, NodeProps, Position } from "react-flow-renderer";
import { useCallback, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import useRFStore from "../store";

const handleStyle = { left: 10 };

export default function FlowButton({ id, data }: NodeProps<{ text: string }>) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>(data.text ? data.text : "Button");
  const updateNodeText = useRFStore().updateNodeText;

  const onChange = useCallback((evt: { target: { value: string } }) => {
    setText(evt.target.value);
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    updateNodeText(id, text);
  };

  return (
    <>
      <Handle type='target' position={Position.Left} />

      {isEditing ? (
        <div className='flex items-end'>
          <textarea
            name='text'
            className='textarea textarea-bordered mx-2 text-black'
            onChange={onChange}
            onClick={(e) => e.stopPropagation()}
          />

          <div className='btn ' onClick={handleSave}>
            Save
          </div>
        </div>
      ) : (
        <div>
          <div className='btn'>{text}</div>
          <div className='cursor-pointer' onClick={() => setIsEditing(true)}>
            <AiFillEdit />
          </div>
        </div>
      )}

      <Handle type='source' position={Position.Right} />
    </>
  );
}
