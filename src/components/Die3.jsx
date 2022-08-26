import React from 'react'

const Die3 = () => {
  return (
    <div className='flex flex-col p-1 justify-center items-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border border-black rounded-lg'>
        <div className="flex w-full">
          <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
        </div>
        
        <div className="flex justify-center w-full">
          <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
        </div>

        <div className="flex justify-end w-full">
          <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
        </div>

    </div>
  )
}

export default Die3