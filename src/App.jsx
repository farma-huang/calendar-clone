import { useState } from 'react'
import Calender from './components/Calender';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App w-screen h-screen flex flex-col">
      <div className="header border-b-2 border-[#dadce0] h-16 w-screen"></div>
      <div className="content-wrapper w-screen h-full flex">
        <div className="slider border-r-2 border-[#dadce0] h-full w-64"></div>
        <div className="content grow h-full">
          <Calender />
        </div>
      </div>
    </div>
  )
}

export default App
