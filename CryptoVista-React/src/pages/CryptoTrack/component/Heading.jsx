import React from 'react'

function Heading({heading}) {
  return (
    <div className='font-bold text-blue-500 text-3xl text-center mt-12 my-9 bg-gray-200 rounded-lg shadow-lg border-3 border-dotted border-indigo-700  p-3 mx-auto w-[1200px] hover:bg-zinc-100'>{heading}</div>
  )
}

export default Heading;