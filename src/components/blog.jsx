import React from 'react'
import { Blogs } from '../utils'


const blog = () => {
  
  const handleClick = (url) => {
    window.location.href= url 
  };

  return (
    <>
      <div className='w-full h-full flex flex-col gap-y-12 items-center justify-center md:py-10 py-1 overflow-x-hidden' id='Blogs'>
       <div className='md:w-[95%] w-[85%] mx-auto'>
          <div className='md:my-10 my-5 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='md:text-3xl text-xl'>Blogs</h2>
            <p>My recent blogs</p>
          </div>
          <div className='md:my-10 my-4 grid md:grid-cols-3 md:grid-rows-none grid-rows-3 md:gap-x-5 gap-y-5'>
            {
                Blogs.map((blog_item,index)=>{
                  return (
                    <div key={index} className='flex flex-col w-full h-full md:gap-y-4 gap-y-2 rounded-md shadow-xl border-2 relative cursor-pointer' onClick={()=>handleClick(blog_item.url)}>
                      <img src={blog_item.image} alt='project_image' className='w-full md:h-[384px] h-full rounded-md' width={280} height={230}/>
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
