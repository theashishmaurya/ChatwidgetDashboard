export default function Navbar() {
  return (
    <div className='navbar bg-base-100 m-0 p-0'>
      <div className='navbar-start'>
        <div className='dropdown  '>
          <label tabIndex={0} className=' lg:hidden cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mr-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Product</a>
            </li>
            <li tabIndex={0}>
              <a>Pricing</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <a className='normal-case text-xl font-bold cursor-pointer '>daisyUI</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <a>Product</a>
          </li>
          <li tabIndex={0}>
            <a>Pricing</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>Get started</a>
      </div>
    </div>
  );
}
