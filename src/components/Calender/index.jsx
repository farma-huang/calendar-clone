import React, { useState, useEffect, useRef } from 'react';
// import ProtoTypes from "prop-types";
import { buildWeeks } from "./generator";
import { getDate } from "date-fns";
import './style.scss';

// const Calender = ({ initYear, initMonthIndex, ...props }) => {
//   const [year, setYear] = useState(initYear);
//   const [monthIndex, setMonthIndex] = useState(initMonthIndex);
const Calender = ({ year, monthIndex, ...props }) => {
  const dates = ["Sun", "Mon", "Tue", "Web", "Thr", "Fri", "Sat"];
  const weeks = buildWeeks(year, monthIndex)  

  return (
    <table className="calender w-full h-full flex flex-col">
      <thead className="week-header border-b-2 border-[#dadce0] h-4 w-full divide-x-2 divide-[#dadce0] flex">
        <tr className="flex w-full divide-x-2">
          {dates.map((date, i) => (
            <td key={i} className="w-1/7 text-xs text-center">{date}</td>
          ))}
        </tr>
      </thead>
      <tbody className="w-full h-full">
        {weeks.map((week, i) => (
          <tr key={i} className="border-b-2 border-[#dadce0] h-1/5 w-full divide-x-2 divide-[#dadce0] flex">
            {week.map((day, j) => (
              <td key={j} className="w-1/7 text-xs text-center">{getDate(day)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Calender.protoTypes = {

// };

export default Calender;