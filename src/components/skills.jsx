import React from 'react'
import { Skills_items_backend, Skills_items_frontend, Skills_items_tools } from '../utils'
import {Skills_layout_reuse} from '../reusable-components/index'

const skills = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col md:gap-y-12 gap-y-6 items-center justify-center mx-auto md:py-10 py-5 overflow-x-hidden' id='Skills'>
        <div className='md:w-4/5 w-[85%]'>
          <div className='md:my-10 my-4 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='text-3xl'>Skills</h2>
            <p>My technical level</p>
          </div>
         <div className='grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6 md:px-4 px-2'>
          <Skills_layout_reuse skill={Skills_items_frontend} skillTitle='Frontend'/>
          <Skills_layout_reuse skill={Skills_items_backend} skillTitle='Backend'/>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 place-items-center md:m-12 m-0 md:mt-12 mt-6'>
          <Skills_layout_reuse skill={Skills_items_tools} skillTitle='Tools'/>
        </div>
        </div>
      </div>
    </>
  )
}

export default skills
