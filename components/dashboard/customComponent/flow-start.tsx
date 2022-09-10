import { Handle, Position } from "react-flow-renderer";
import { useCallback, useState, MouseEvent } from "react";

const handleStyle = { left: 10 };

export default function FlowStart({ data }: any) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, animi tempore sint, tempora dolore ab minima maiores quibusdam ratione ut repellat. In provident dignissimos impedit nulla perferendis ea earum ut!"
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

            <div className='btn '>Save</div>
          </div>
        ) : (
          <div className='flex-wrap font-bold text-xl'>{text}</div>
        )}
      </div>

      <Handle type='source' position={Position.Right} />
    </>
  );
}
