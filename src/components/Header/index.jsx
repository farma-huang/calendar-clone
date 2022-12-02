import React from "react"

const Header = () => {
  const onMenuClick = () => {
    console.log("onMenuClick");
  };

  return (
    <div className="header border-b-2 border-[#dadce0] h-16 w-screen flex justify-start items-center">
      <div className="w-60 h-10 ml-2 mt-1 flex justify-start items-center">
        <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-300" onClick={onMenuClick}>
          <i className="fa-solid fa-bars fa-lg"></i>
        </button>
        <i className="fa-solid fa-calendar-days fa-2xl mx-2"></i>
        <span className="leading-10">Calendar</span>
      </div>
      <div className="h-10 ml-2 mt-1 flex justify-start items-center">
        <button className="w-16 h-10 rounded-lg border-solid border border-black rounded-4 hover:bg-gray-300" onClick={onMenuClick}>
          <span>Today</span>
        </button>
        <div className="ml-4">
          <button className="w-8 h-10">
            <i className="fa-solid fa-chevron-left fa-lg"></i>
          </button>
          <button className="w-8 h-10">
            <i className="fa-solid fa-chevron-right fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Header;
