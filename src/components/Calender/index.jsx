import React, { useState, useEffect, useRef } from 'react';

import './style.scss';

const Calender = () => {
  return (
    <div className="calender w-full h-full flex flex-col">
      <div className="week-header border-b-2 border-[#dadce0] h-4 w-full divide-x-2 divide-[#dadce0] flex">
        <div className="w-1/7 text-xs text-center">Mon</div>
        <div className="w-1/7 text-xs text-center">Tue</div>
        <div className="w-1/7 text-xs text-center">Web</div>
        <div className="w-1/7 text-xs text-center">Thr</div>
        <div className="w-1/7 text-xs text-center">Fri</div>
        <div className="w-1/7 text-xs text-center">Sat</div>
        <div className="w-1/7 text-xs text-center">Sun</div>
      </div>
      <div className="date-wrapper flex flex-col grow">
        <div className="date-row w-full h-1/5 border-b-2 border-[#dadce0] flex divide-x-2 divide-[#dadce0]">
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
        </div>
        <div className="date-row w-full h-1/5 border-b-2 border-[#dadce0] flex divide-x-2 divide-[#dadce0]">
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
        </div>
        <div className="date-row w-full h-1/5 border-b-2 border-[#dadce0] flex divide-x-2 divide-[#dadce0]">
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
        </div>
        <div className="date-row w-full h-1/5 border-b-2 border-[#dadce0] flex divide-x-2 divide-[#dadce0]">
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
        </div>
        <div className="date-row w-full h-1/5 border-b-2 border-[#dadce0] flex divide-x-2 divide-[#dadce0]">
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
          <div className="w-1/7 text-xs text-center">2</div>
          <div className="w-1/7 text-xs text-center">1</div>
        </div>
      </div>
    </div>
  );
};

export default Calender;