import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub, AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { ChangeEvent, MouseEvent, useState } from "react";
import { signUp } from "../components/auth/singup";

export default function Singup() {
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    errorMessage: "",
    isError: false,
  });

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (userDetail.password !== userDetail.confirmPassword) {
      setError({
        errorMessage: "Password and Confirm Password must be same",
        isError: true,
      });
    } else {
      setError({
        errorMessage: "",
        isError: false,
      });
    }

    signUp(userDetail).then((data) => {
      console.log("user created");
    });

    console.log(userDetail);
  };

  const [loading, setLoading] = useState(false);

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
        <div className='card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='flex justify-between'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>First Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Jonh'
                  name='firstName'
                  className='input input-bordered'
                  onChange={handleChanges}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Last Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Doe'
                  name='lastName'
                  className='input input-bordered'
                  onChange={handleChanges}
                />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='johnDoe@email.com'
                className='input input-bordered'
                onChange={handleChanges}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                onChange={handleChanges}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm password'
                className='input input-bordered'
                onChange={handleChanges}
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn' onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
            <div className='form-control mt-2'>
              <Link href='/login'>
                <button className='btn bg-white text-black hover:bg-white'>
                  Log in
                </button>
              </Link>
            </div>
            {/* <div className='divider'>Or</div>
            <div className='flex justify-center'>
              <div className='mx-4'>
                <FcGoogle fontSize={32} />
              </div>
              <div className='mx-4'>
                <AiOutlineGithub fontSize={32} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
