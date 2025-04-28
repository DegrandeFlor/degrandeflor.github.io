import { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaFolder, FaCogs, FaInfoCircle, FaBox } from 'react-icons/fa'
import SettingsBlade from './SettingsBlade'

function Sidebar({ openBlade }) {
  const [expanded, setExpanded] = useState(false)

  const toggleSidebar = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={`bg-[#252525] ${expanded ? "w-48" : "w-16"} transition-all duration-300 py-4 border-r border-gray-700 relative`}>
      
      {/* Sidebar Toggle Icon */}
      <div className="flex flex-col mt-3 margin-bottom-0">
      <div
        onClick={toggleSidebar}
        className="flex flex-col items-center py-2 px-4 cursor-pointer hover:bg-[#333] transition-all"
      >
        {expanded ? <FaArrowLeft className="text-white" /> : <FaArrowRight className="text-white" />}
      </div>
      </div>
      {/* Sidebar Links */}
      <div className="flex flex-col mt-3">
        <div className="flex items-center cursor-pointer py-2 px-4 hover:bg-[#333] transition-all" onClick={() => openBlade('Resource Groups')}>
          <FaBox className="text-white text-xl" />
          {expanded && <span className="ml-4 text-white">Resource Groups</span>}
        </div>

        <div className="flex items-center cursor-pointer py-2 px-4 hover:bg-[#333] transition-all" onClick={() => openBlade('Explorer')}>
          <FaFolder className="text-white text-xl" />
          {expanded && <span className="ml-4 text-white">Explorer</span>}
        </div>

        <div className="flex items-center cursor-pointer py-2 px-4 hover:bg-[#333] transition-all" onClick={() => openBlade('Settings')}>
          <FaCogs className="text-white text-xl" />
          {expanded && <span className="ml-4 text-white">Settings</span>}
        </div>

        <div className="flex items-center cursor-pointer py-2 px-4 hover:bg-[#333] transition-all" onClick={() => openBlade('About')}>
          <FaInfoCircle className="text-white text-xl" />
          {expanded && <span className="ml-4 text-white">About</span>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar

// import { FaArrowLeft, FaArrowRight, FaFolder, FaCogs, FaInfoCircle, FaBox } from 'react-icons/fa'

// function Sidebar({ openBlade }) {
//   const [expanded, setExpanded] = useState(false)

//   const toggleSidebar = () => {
//     setExpanded(!expanded)
//   }

//   return (
//     <div className={`bg-[#252525] ${expanded ? 'w-48' : 'w-16'} transition-all duration-300 py-4 border-r border-gray-700 relative`}>
//       {/* Sidebar Toggle Icon */}
//       <div 
//         onClick={toggleSidebar}
//         className="absolute top-4 right-0 p-2 cursor-pointer hover:bg-[#333] rounded-full transition-all"
//       >
//         {expanded ? <FaArrowLeft className="text-white" /> : <FaArrowRight className="text-white" />}
//       </div>

//       {/* Sidebar Links */}
//       <div className="flex flex-col mt-10">
//         <div className="flex items-center cursor-pointer py-2 px-4 hover:bg-[#333] transition-all" onClick={() => openBlade('Resource Groups')}>
//           <FaBox className="text-white text-xl" />
//           {expanded && <span className="ml-4 text-white">Resource Groups</span>}
//         </div>

//         <div className="flex items-center cursor-pointer py-2 px-4 hover:bg-[#333] transition-all" onClick={() => openBlade('Explorer')}>
//           <FaFolder className="text-white text-xl" />
//           {expanded && <span className="ml-4 text-white">Explorer</span>}
//         </div>

//         <div className="flex items-center cursor-pointer py-2 px-4 hover:bg-[#333] transition-all" onClick={() => openBlade('Settings')}>
//           <FaCogs className="text-white text-xl" />
//           {expanded && <span className="ml-4 text-white">Settings</span>}
//         </div>

//         <div className="flex items-center cursor-pointer py-2 px-4 hover:bg-[#333] transition-all" onClick={() => openBlade('About')}>
//           <FaInfoCircle className="text-white text-xl" />
//           {expanded && <span className="ml-4 text-white">About</span>}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar
