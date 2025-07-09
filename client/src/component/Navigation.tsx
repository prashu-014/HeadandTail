import React from 'react'
import Logo from "../../public/coin-toss.png";

const Navigation = () => {
  return (
    <div className=" border-b border-zinc-300">
      <div className="flex items-center gap-2 bg-white p-3">
        <img src={Logo} alt="logo" className=" w-8 md:w-10" />
        <h1 className="text-xl font-bold">Toss Tracker</h1>
      </div>
    </div>
  )
}

export default Navigation