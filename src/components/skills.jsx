import React from 'react'
import { Skills_items_backend, Skills_items_frontend, Skills_items_tools } from '../utils'
import {Skills_reuse,Skills_layout_reuse} from '../reusable-components/index'

const skills = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col gap-y-12 items-center justify-center mx-auto py-10' id='Skills'>
        <div className='w-3/5'>
          <div className='my-10 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='text-3xl'>Skills</h2>
            <p>My technical level</p>
          </div>
         <div className='grid grid-cols-2 gap-12 px-4'>
          <Skills_layout_reuse skill={Skills_items_frontend} skillTitle='Frontend'/>
          <Skills_layout_reuse skill={Skills_items_backend} skillTitle='Backend'/>
        </div>
        <div className='grid grid-cols-1 place-items-center m-12'>
          <Skills_layout_reuse skill={Skills_items_tools} skillTitle='tools'/>
        </div>
        </div>
      </div>
    </>
  )
}

export default skills
