import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <div className="flex items-center my-auto   gap-4 justify-center">

      <button className=' bg-purple-500 px-3 py-2 rounded-full hover:bg-purple-400  transition-all  duration-700'>Sign Up</button>
      <button className=' bg-purple-500 px-3 py-2 rounded-full hover:bg-purple-400  transition-all  duration-700'>Login</button>
   </div>
  </>
  )
}

export default App
