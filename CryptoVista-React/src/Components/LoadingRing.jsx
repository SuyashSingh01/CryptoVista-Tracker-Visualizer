import React from 'react'

function LoadingRing() {
  return (
    <>
    <div className='flex justify-center item-center'>
    <span className="loading loading-ring loading-xs"></span>
    <span className="loading loading-ring loading-sm"></span>
    <span className="loading loading-ring loading-md"></span>
    <span className="loading loading-ring loading-lg"></span>
    </div>
    </>
  )
}

export default LoadingRing