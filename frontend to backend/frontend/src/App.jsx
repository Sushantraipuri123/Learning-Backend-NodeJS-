import { useForm } from "react-hook-form"
import './App.css'
import axios from 'axios'

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
      <div className='flex flex-col items-center'>
        <p>Enter Your details</p>
        <form onSubmit={handleSubmit(onSubmit)} className='w-1/3 space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor='firstName' className='mb-1'>First Name</label>
            <input 
              id='firstName'
              {...register("firstName", { required: true, maxLength: 20 })} 
              className='border-2 border-black p-2 rounded-xl'
            />
            {errors.firstName && <span className='text-red-500'>This field is required and max length is 20</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='lastName' className='mb-1'>Last Name</label>
            <input 
              id='lastName'
              {...register("lastName", { pattern: /^[A-Za-z]+$/i })} 
              className='border-2 border-black p-2 rounded-xl'
            />
            {errors.lastName && <span className='text-red-500'>This field should only contain letters</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='mb-1'>email</label>
            <input 
              id='email'
              type='email'
              {...register("email", { required: true, maxLength: 20 })} 
              className='border-2 border-black p-2 rounded-xl'
            />
            {errors.age && <span className='text-red-500'>Age must be between 18 and 99</span>}
          </div>
          <button 
            type="submit" 
            className='mt-4 bg-blue-500 text-white p-2 rounded'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default App
