import { Handle, Position, NodeProps } from "react-flow-renderer";
import { useCallback, useState, MouseEvent } from "react";
import useRFStore from "../store";

const handleStyle = { left: 10 };

export default function FlowStart({ id, data }: NodeProps<{ text: string }>) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>(
    data.text
      ? data.text
      : "This is the beginning of your flow. Click to edit this text."
  );
  const onChange = useCallback((evt: { target: { value: string } }) => {
    setText(evt.target.value);
  }, []);

  const updateNodeText = useRFStore().updateNodeText;
  const handleEditing = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    updateNodeText(id, text);
  };
  return (
    <>
      <Handle type='target' position={Position.Left} />
      <div
        className='bg-green-500 p-10 max-w-sm rounded-md shadow-md'
        onClick={handleEditing}
      >
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
          <div className='flex-wrap font-bold text-xl'>{text}</div>
        )}
      </div>

      <Handle type='source' position={Position.Right} />
    </>
  );
}
