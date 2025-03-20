import { useState } from 'react'
import './App.css'
import Banner from './component/banner'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      <Banner />
      <div className="h-[200vh] bg-black"></div>
    </div>
  )
}

export default App
