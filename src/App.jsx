import { useState } from 'react'
import Calender from './components/Calender';
import Header from './components/Header';
import './App.css'

function App() {
  let date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [monthIndex, setMonthIndex] = useState(date.getMonth());

  return (
    <div className="App w-screen h-screen flex flex-col">
      {/* <div className="header border-b-2 border-[#dadce0] h-16 w-screen">
          
      </div> */}
      <Header />
      <div className="content-wrapper w-screen h-full flex">
        <div className="slider border-r-2 border-[#dadce0] h-full w-64"></div>
        <div className="content grow h-full">
          <Calender year={year} monthIndex={monthIndex} />
        </div>
      </div>
    </div>
  )
}

export default App
