import { useState } from 'react'

function Topbar({ toggleTheme }) {
  return (
    <div className="h-12 bg-[#0078d4] flex items-center px-4 justify-between">
      <div className="text-white font-semibold">Azure Portal - My Portfolio</div>
      <div className="flex items-center gap-4">
        <button className="text-white">🔔</button>
        <button onClick={toggleTheme} className="text-white">🌓</button>
        <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center text-black font-bold">
          F
        </div>
      </div>
    </div>
  )
}

export default Topbar
