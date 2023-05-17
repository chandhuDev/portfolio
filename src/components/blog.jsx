import React from 'react'
import { Blogs } from '../utils'


const blog = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col gap-y-12 items-center justify-center md:py-10 py-1' id='Blogs'>
       <div className='w-4/5 mx-auto'>
          <div className='md:my-10 my-5 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='md:text-3xl text-xl'>Blogs</h2>
            <p>My recent blogs</p>
          </div>
          <div className='md:my-10 my-4 grid md:grid-cols-3 md:grid-rows-none grid-rows-3 md:gap-x-10 gap-y-5'>
            {
                Blogs.map((blog_item,index)=>{
                  return (
                    <div key={index} className='flex flex-col w-full h-full md:gap-y-4 gap-y-2 rounded-md shadow-xl border-2 relative cursor-pointer border-black/60'>
                      <img src={blog_item.image} alt='project_image' className='w-full h-full rounded-md' width={140} height={120}/>
                    </div>   
                  )
                })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default blog
