import React from 'react'
import { Skills_reuse } from '.'

const skills_layout_reuse = ({skill,skillTitle}) => {
  return (
    <div className='rounded-xl border-2 flex flex-col justify-center cursor-pointer'>
        <h2 className='w-full text-center my-4'>{skillTitle}</h2>
          <div className='grid grid-cols-2 gap-4'>
            {
                skill?.map((skills_item,index)=>{
                    return <Skills_reuse skillImage={skills_item.name} skillName={skills_item.skill} skillLevel={skills_item.level} key={index}/>
                })
            }
        </div>
    </div>
  )
}

export default skills_layout_reuse
