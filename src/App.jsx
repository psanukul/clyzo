import { useState } from 'react'
import './App.css'
import Banner from './component/banner'
import Category from './component/Category' 
import Categories from "./Component/Categories/Categories.jsx"

function App() {
  // const [count, setCount] = useState(0)


  return (
    <div >
    <Banner />
    <Category />
    <Categories/>
  </div>
  )
}

export default App
