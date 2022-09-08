import Link from "next/link";
import { FaTools, FaSave, FaRobot, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='drawer drawer-mobile'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Well
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-24 bg-gray-800 text-white'>
          <Link href='/'>
            <li>
              <a>a</a>
            </li>
          </Link>

          <div className='divider before:bg-gray-600 after:bg-gray-600'></div>

          <Link href='/'>
            <li className='text-gray-200 bg-gray-600 rounded-full my-6  hover:text-white hover:rounded-md '>
              <a>
                <FaTools fontSize={32} />
              </a>
            </li>
          </Link>

          <li className='text-gray-200 bg-gray-600 rounded-full my-6 hover:text-white hover:rounded-md'>
            <a>
              <FaSave fontSize={32} />
            </a>
          </li>

          <li className='text-gray-200 bg-gray-600 rounded-full my-6  hover:text-white hover:rounded-md'>
            <a>
              <FaRobot fontSize={32} />
            </a>
          </li>
          <div className='divider before:bg-gray-600 after:bg-gray-600'></div>

          <li className='text-gray-200 bg-gray-600 rounded-full my-6  hover:text-white hover:rounded-md'>
            <a>
              <FaCog fontSize={32} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
