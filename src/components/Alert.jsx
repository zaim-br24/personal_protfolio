import React from 'react'
import { motion } from "framer-motion";

export default function Alert({handleClick}) {
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}  // Initial state
    animate={{ opacity: 1, y: 0 }}     // Target state
    transition={{ duration: .7 }}  
    className="w-64 bottom-5 right-5 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 rounded absolute z-10"     // Animation duration
    >           
    <strong className="font-bold">Note:</strong>
        <span className="block sm:inline"> The live projects demo are deployed to heroku, they may load slowly.</span>
        <span onClick={handleClick} className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M14.293 5.293a1 1 0 011.414 0l.293.293L10 10.586l-5.293-5.293a1 1 0 111.414-1.414L10 8.172l4.293-4.293a1 1 0 111.414 1.414l-.293.293L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.828l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
            </svg>
    </span>
  </motion.div>
  )
}
