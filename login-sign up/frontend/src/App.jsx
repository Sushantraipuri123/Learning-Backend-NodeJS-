import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)


  return (
  <>
   <div className="flex items-center my-auto   gap-4 justify-center">
     <Link to='/signup'> <button className=' bg-purple-500 px-3 py-2 rounded-full hover:bg-purple-400  transition-all  duration-700'>Sign Up</button></Link>
     <Link to='/login'>   <button className=' bg-purple-500 px-3 py-2 rounded-full hover:bg-purple-400  transition-all  duration-700'>Login</button></Link>
   </div>
  </>
  )
}

export default App
