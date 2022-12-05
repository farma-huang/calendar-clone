import { useState, useContext } from 'react';
import Calender from './components/Calender';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { useSelector } from "react-redux";

import './App.css'

function App() {
  const date = useSelector((state) => state.common.date);

  return (
    <div className="App w-screen h-screen flex flex-col">
      <Header />
      <div className="content-wrapper w-screen h-full flex">
        {/* <div className="slider border-r-2 border-[#dadce0] h-full w-64"></div> */}
        <SideBar />
        <div className="content grow h-full">
          <Calender year={date.getFullYear()} monthIndex={date.getMonth()} />
        </div>
      </div>
    </div>
  )
}

export default App
