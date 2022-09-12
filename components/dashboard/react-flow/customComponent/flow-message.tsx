import { Handle, NodeProps, Position } from "react-flow-renderer";
import { MouseEvent, useCallback, useState } from "react";
import useRFStore from "../store";

const handleStyle = { left: 10 };

export default function FlowMessage({ id, data }: NodeProps<{ text: string }>) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>(
    data.text
      ? data.text
      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, animi tempore sint, tempora dolore ab minima maiores quibusdam ratione ut repellat. In provident dignissimos impedit nulla perferendis ea earum ut!"
  );
  const onChange = useCallback((evt: { target: { value: string } }) => {
    console.log(evt.target.value);
    setText(evt.target.value);
  }, []);

  const handleEditing = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const updateNodeText = useRFStore().updateNodeText;

  const handleSave = () => {
    updateNodeText(id, text);
  };
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <div
        onClick={handleEditing}
        className='border-2 border-black p-4 py-2 bg-blue-900 text-bold text-white drop-shadow-lg rounded-md w-96 max-h-28 overflow-auto'
      >
        {isEditing ? (
          <div className='flex items-end'>
            <textarea
              name='text'
              className='textarea textarea-bordered mx-2 text-black'
              onChange={onChange}
              onClick={(e) => e.stopPropagation()}
            />

            <div className='btn '>Save</div>
          </div>
        ) : (
          <div className='flex-wrap'>{text}</div>
        )}
      </div>

      <Handle type='source' position={Position.Right} />
    </>
  );
}
