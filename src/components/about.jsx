import React from 'react'
import testimonial  from '../assets/testimonial1.png'
import {about_items} from '../utils/index'


const about = () => {
  return (
    <>
     <div className='w-full h-full md:px-40 px-6 md:my-10 my-5 md:py-20 py-6 flex flex-col justify-center overflow-x-hidden' id='About'>
        <div className='flex flex-col md:gap-y-2 gap-y-1 w-full items-center '>
            <h2 className='text-2xl'>About Me</h2>
            <p className=''>My introduction</p>
        </div>
        <div className='flex md:flex-row flex-col md:mt-10 mt-5 md:gap-24 gap-12'>
          <div className='rounded-lg shadow-xl border-4 border-b-slate-300/60 w-full h-full'>
          <img src={testimonial} alt='profile image'  className='w-full h-4/5 object-cover cursor-pointer'/>
          </div>
          <div className='flex flex-col gap-1'>
          <div className='grid grid-cols-3 md:gap-4 gap-1'>
          {
            about_items.map((about_item,index)=>{
                return (
                    <div key={index} className='flex flex-col md:p-3 p-1 md:gap-2 gap-1 items-center cursor-pointer border-2 rounded-lg border-black/40'>
                       <i className={`uil uil-${about_item.class} md:text-3xl text-xl`}></i>
                       <p className='font-semibold md:text-lg text-base'>{about_item.name}</p>
                       <p className='text-center'>{about_item.number}</p>
                    </div>
                )
            })
          }
        </div>
           <p className='md:mt-10 mt-5 md:text-lg text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa, harum quaerat cumque libero accusamus laborum voluptatem ab eligendi ea? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, odit.</p>
           <div className='flex flex-row md:justify-evenly justify-between w-full md:mt-16 mt-8'>
             <button className='rounded-xl md:px-4 px-2 md:py-4 py-2 text-white/50 bg-black/90 hover:bg-black/60 text-lg duration-300'>Resume<span className='md:ml-3 ml-1'><i className='uil uil-file-download-alt text-xl'></i></span>
             </button>
             <button className='rounded-xl md:px-4 px-2 md:py-4 py-2 text-white/50 bg-black/90 hover:bg-black/60 text-lg duration-300'>Cover Letter<span className='md:ml-3 ml-1'><i className='uil uil-file-download-alt text-xl'></i></span>
             </button>
           </div>
         </div>
        </div>
     </div>
    </>
  )
}

export default about
