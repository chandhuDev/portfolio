import React from 'react'
import testimonial  from '../assets/testimonial1.png'
import {about_items} from '../utils/index'


const about = () => {
  return (
    <>
     <div className='w-full h-full px-40 my-10 py-20 flex flex-col justify-center' id='About'>
        <div className='flex flex-col gap-y-2 w-full items-center '>
            <h2 className='text-2xl'>About Me</h2>
            <p className=''>My introduction</p>
        </div>
        <div className='flex flex-row mt-10 gap-24'>
          <div className='rounded-lg shadow-xl border-4 border-b-slate-300/60 w-full h-full'>
          
          <img src={testimonial} alt='profile image'  className='w-full h-full object-cover cursor-pointer'/>
          

          </div>
          <div className='flex flex-col gap-1'>
          <div className='grid grid-cols-3 gap-4'>
          {
            about_items.map((about_item,index)=>{
                return (
                    <div key={index} className='flex flex-col p-3 gap-2 items-center cursor-pointer border-2 rounded-lg border-black/40'>
                       <i className={`uil uil-${about_item.class} text-3xl`}></i>
                       <p className='font-semibold text-lg'>{about_item.name}</p>
                       <p>{about_item.number}</p>
                    </div>
                )
            })
          }
        </div>
           <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa, harum quaerat cumque libero accusamus laborum voluptatem ab eligendi ea? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, odit.</p>
           <div className='flex flex-row justify-evenly w-full mt-16'>
             <button className='rounded-xl w-1/4 py-4 text-white bg-black/90 hover:bg-black/60 text-lg duration-300'>Resume<span className='ml-3'><i className='uil uil-file-download-alt text-xl'></i></span>
             </button>
             <button className='rounded-xl w-1/4 py-4 text-white bg-black/90 hover:bg-black/60 text-lg duration-300'>Cover Letter<span className='ml-3'><i className='uil uil-file-download-alt text-xl'></i></span>
             </button>
           </div>
         </div>
        </div>
     </div>
    </>
  )
}

export default about
