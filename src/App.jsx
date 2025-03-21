import { useState } from 'react'
import './App.css'
import Banner from './component/banner'
import Category from './component/Category' 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      <Banner />
      <div className="h-[200vh] bg-black"><Category /></div>
    </div>
  )
}

export default App
