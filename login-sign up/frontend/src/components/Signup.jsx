import React from 'react';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
   <>
   <h1 className="text-3xl font-semibold mb-4">Sign up here</h1>
    <div className='flex items-center justify-center  bg-gray-100'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/3 space-y-4 mt-3 text-center'>
        <div className='flex flex-row items-center'>
          <label htmlFor='firstName' className='mb-1 mr-3'>First Name:</label>
          <input 
            id='firstName'
            {...register("firstName", { required: true, maxLength: 20 })} 
            className={`border-2 p-2 rounded-xl flex-grow ${errors.firstName ? 'border-red-500' : 'border-black'}`}
          />
        </div>
        <div className='flex flex-row items-center mt-5'>
          <label htmlFor='lastName' className='mb-1 mr-3'>Last Name:</label>
          <input 
            id='lastName'
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })} 
            className={`border-2 p-2 rounded-xl flex-grow ${errors.lastName ? 'border-red-500' : 'border-black'}`}
          />
        </div>
        <div className='flex flex-row items-center mt-5'>
          <label htmlFor='email' className='mb-1 mr-3'>Email:</label>
          <input 
            id='email'
            type='email'
            {...register("email", { required: true, maxLength: 20 })} 
            className={`border-2 p-2 rounded-xl flex-grow ${errors.email ? 'border-red-500' : 'border-black'}`}
          />
        </div>
        <div className='flex flex-row items-center mt-5'>
          <label htmlFor='password' className='mb-1 mr-3'>Password:</label>
          <input 
            id='password'
            type='password'
            {...register("password", { required: true, maxLength: 20, minLength: 4 })} 
            className={`border-2 p-2 rounded-xl flex-grow ${errors.password ? 'border-red-500' : 'border-black'}`}
          />
        </div>
        <button 
          type="submit" 
          className='mt-4 bg-blue-500 text-white p-2 rounded'
        >
          Sign up
        </button>
      </form>
    </div>
   </>
  );
}

export default Signup;
