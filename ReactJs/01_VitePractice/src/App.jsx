import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Practices from './Practice.jsx'
import Practices1 from './Practices1.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React with Great Practices</h1>
      {/* <Practices/> */}
      <Practices1/>
    </>
  )
}

export default App
