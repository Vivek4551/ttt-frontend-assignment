import React from 'react'
import diamond from '../assets/diamond.svg'
import verified from '../assets/verified.svg'

const Name = ({name}) => {
  return (
    <div className="flex gap-2 items-center pt-4">
      <p className='text-2xl md:text-4xl font-semibold'>{name}</p>
      <div className='bg-purple-800 rounded-full p-px'>
        <img src={diamond} alt="diamond" className="w-5 h-5" />
      </div>
      <img src={verified} alt="diamond" className="w-5 h-5" />
    </div>
  );
}

export default Name
