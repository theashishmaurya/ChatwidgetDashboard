import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub, AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

export default function Singup() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <Link href='/'>
        <div className='p-4 rounded-full shadow-md bg-white absolute top-4 left-4 cursor-pointer'>
          <AiOutlineArrowLeft color='gray' className='font-bold' />
        </div>
      </Link>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left lg:mx-40'>
          <h1 className='text-5xl font-bold'>Sign up now!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                className='input input-bordered'
              />
              {/* <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <input
                type='text'
                placeholder='Confirm password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn '>Sign Up</button>
            </div>
            <div className='form-control mt-2'>
              <Link href='/login'>
                <button className='btn bg-white text-black hover:bg-white'>
                  Log in
                </button>
              </Link>
            </div>
            <div className='divider'>Or</div>
            <div className='flex justify-center'>
              <div className='mx-4'>
                <FcGoogle fontSize={32} />
              </div>
              <div className='mx-4'>
                <AiOutlineGithub fontSize={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
