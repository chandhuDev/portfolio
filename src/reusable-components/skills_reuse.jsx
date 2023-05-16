import React from 'react'

const skills_reuse = ({skillImage,skillName,skillLevel}) => {
  return (
    <div className='flex flex-row gap-x-2 p-4'>
      <img src={`${skillImage}`} alt={`${skillName}`} width={20} height={10}/>
      <div className='flex flex-col'>
        <p className='text-base font-semibold'>{skillName}</p>
        <p className='text-xs font-extralight'>{skillLevel}</p>
      </div>
    </div>
  )
}

export default skills_reuse
