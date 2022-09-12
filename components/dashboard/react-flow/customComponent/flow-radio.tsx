import { MouseEvent, useEffect, useRef, useState } from "react";
import { customAlphabet } from "nanoid";
import { Handle, NodeProps, Position } from "react-flow-renderer";
import useRFStore, { NodeArrayData } from "../store";
import { shortId } from "../../utils/shortNanoId";

export default function FlowRadio({
  id,
  data,
}: NodeProps<{ id: string; data: NodeArrayData }>) {
  const [radios, setRadios] = useState<NodeArrayData>([
    {
      id: shortId(),
      name: "first",
    },
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const updateGroupCustomNode = useRFStore().updateGroupCustomNode;

  useEffect(() => {
    updateGroupCustomNode(id, "radios", radios);
  }, [radios]);

  const handleAddCheckBox = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    let value = inputRef.current?.value;
    if (value) {
      setRadios([...radios, { id: shortId(), name: value }]);

      setIsAdding(false);
    }
  };

  const handleCancel = () => {
    let value = inputRef.current?.value;
    if (value) {
      value = "";
    }

    setIsAdding(false);
  };

  const handleDelete = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    id: string
  ) => {
    let UpdatedCheckbox = radios.filter((data) => data.id !== id);

    setRadios(UpdatedCheckbox);
  };

  return (
    <>
      <Handle type='target' position={Position.Left} />

      <div className='bg-orange-300 p-4 rounded-md w-86'>
        {radios.map((obj, index) => {
          return (
            <div
              className='form-control bg-white my-2 p-2 rounded-md'
              key={index + 1}
            >
              <label className='cursor-pointer label'>
                <span className='label-text text-black font-bold'>
                  {obj.name}
                </span>
                <input type='radio' name={obj.name} className='radio mx-4 ' />
              </label>
              <div
                className='btn'
                onClick={(e) => {
                  handleDelete(e, obj.id);
                }}
              >
                Delete
              </div>
            </div>
          );
        })}

        <div className='divider'></div>

        {isAdding ? (
          <form
            onSubmit={handleAddCheckBox}
            className='flex items-center flex-cols'
          >
            <div>
              <input
                className='input w-40 '
                type='text'
                ref={inputRef}
                placeholder='Enter you Radio Label'
              />
            </div>
            <button
              className='btn mx-2 bg-red-600 hover:bg-red-800  btn-sm'
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button className='btn mx-2  btn-sm'>Add</button>
          </form>
        ) : (
          <div className='flex justify-end'>
            <div className='btn btn-sm ' onClick={() => setIsAdding(true)}>
              Add
            </div>
          </div>
        )}
      </div>
      <Handle type='source' position={Position.Right} />
    </>
  );
}
