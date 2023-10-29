"use client"

import CountUp from "react-countup";

const Counter = ({ start, end, duration}) => {
  return (
    <>
      <CountUp start={start} end={end} duration={duration} className="text-4xl font-semibold"/>
    </>
  )
}

export default Counter