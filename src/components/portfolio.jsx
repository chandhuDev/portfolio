import React from 'react'
import { projects } from'../utils/index'

const portfolio = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col gap-y-12 items-center justify-center py-10' id='Portfolio'>
         <div className='w-4/5 mx-auto'>
          <div className='my-10 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='text-3xl'>Portfolio</h2>
            <p>My recent work</p>
          </div>
          <div className='my-10 grid grid-cols-3 p-12'>
             {
                projects.map((project,index)=>{
                    return (
                        <div key={index} className='flex flex-col w-full h-full rounded-md shadow-lg border-2 border-black/20 cursor-pointer relative hover:scale-105 duration-300 ease-in-out bg-transparent'>
                            <img src={project.image} alt='roject_image' className='w-full h-full rounded-md'/>
                            <div className='flex flex-row justify-evenly opacity-90  gap-2 absolute bottom-0 text-white left-0 w-full h-1/6 rounded-br-none rounded-bl-none rounded-md backdrop-blur-md'>
                             <p>{project.code}</p>
                             <p>{project.demo}</p>
                            </div>
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

export default portfolio
