import React from 'react'

const Die6 = () => {
  return (
    <div className='flex flex-col justify-around items-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border border-black rounded-lg'>
        <div className="flex w-full justify-around items-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
        </div>
        <div className="flex w-full justify-around items-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
        </div>
        <div className="flex w-full justify-around items-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></div>
        </div>
    </div>
  )
}

export default Die6