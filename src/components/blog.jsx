import React from 'react'
import { Blogs } from '../utils'
import testimonial from '../assets/testimonial1.png'

const blog = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col gap-y-12 items-center justify-center py-10' id='Blogs'>
       <div className='w-4/5 mx-auto'>
          <div className='my-10 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='text-3xl'>Blogs</h2>
            <p>My recent blogs</p>
          </div>
          <div className='my-10 grid grid-cols-3 gap-x-10'>
            {
                Blogs.map((blog_item,index)=>{
                  return (
                    <div key={index} className='flex flex-col w-full h-full gap-y-4 rounded-md shadow-xl border-2 relative cursor-pointer border-black/60'>
                      <img src={blog_item.image} alt='project_image' className='w-full h-full rounded-md' width={140} height={120}/>
                      <p className='ml-3 mb-2 absolute  text-center bottom-10 text-white bg-black/50 hidden duration-200 hover:block p-4'>chandhu</p>
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
