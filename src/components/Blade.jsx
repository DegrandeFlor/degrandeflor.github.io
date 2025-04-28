import { motion } from 'framer-motion'

function Blade({ title, children, closeBlade }) {
  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: 300 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="w-80 min-w-[20rem] border-l border-gray-700 bg-[#252525] p-4 shadow-md flex flex-col"
    >
      <div className="flex justify-between items-center mb-2 border-b border-gray-600 pb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        {closeBlade && (
          <button onClick={closeBlade} className="text-gray-400 hover:text-red-400">✖</button>
        )}
      </div>
      <div className="overflow-y-auto">
        {children}
      </div>
    </motion.div>
  )
}

export default Blade
