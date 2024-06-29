import { useForm } from "react-hook-form"
import './App.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    axios.post("/users/createUser", data)
      .then((res) => {
        console.log(res.data)
      })



      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <>
      <h1 className='text-center text-2xl font-bold'>This is MERN project</h1>
      <hr className='my-3' />
      <div className='flex flex-col items-center mt-5'>
        <h4 className="mt-7 text-xl">Enter Your details</h4>

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
    <label htmlFor='password' className='mb-1 mr-3'>password:</label>
    <input 
      id='password'
      type='text'
      {...register("password", { required: true, maxLength: 20, minLength:4 })} 
      className={`border-2 p-2 rounded-xl flex-grow ${errors.email ? 'border-red-500' : 'border-black'}`}
    />
  </div>
  <button 
    type="submit" 
    className='mt-4 bg-blue-500 text-white p-2 rounded'
  >
    Submit
  </button>
</form>

        <NavLink to="/content">
        <button>Content</button>
        </NavLink>
      </div>
    </>
  )
}

export default App
