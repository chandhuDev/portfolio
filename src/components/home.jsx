import React from 'react'
import testimonial  from '../assets/testimonial1.png'

const home = () => {
  return (
    <>
      <div id='Home'>
          <div className='flex flex-row  w-full h-screen pl-48 pr-28'>
             <div className='w-[13%] h-full pt-72 grow-0 '>
                 <div className='flex flex-col gap-y-10 w-full h-full text-3xl'>
                    <a href='https://github.com/chandhuDev' className='cursor-pointer'><i className='uil uil-github-alt'></i></a> 
                    <a href='https://twitter.com/chandhudev' className='cursor-pointer'><i className='uil uil-twitter-alt'></i></a>
                    <a href='https://www.linkedin.com/in/chandhudev/' className='cursor-pointer'><i className='uil uil-linkedin-alt'></i></a>
                 </div>
             </div>
             <div className='w-[40%] h-full grow-0 flex flex-col gap-y-8 pt-48 ml-4'>
                 <h1 className='text-6xl font-medium'>Chandhu <span>🖐</span></h1>
                 <div className='flex flex-row items-center'>
                  <p className='bg-black/40 w-28 h-1 mx-2 inline-block'></p>
                  <h2 className='text-xl'>Full-Stack Developer</h2>
                 </div>
                 
                 <h4 className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti accusantium quidem sint veritatis aperiam eveniet aliquid iusto? Veniam unde </h4>
                 <button className='bg-black/90 hover:bg-black/70 hover:duration-300 text-white w-2/4 inline-flex justify-center items-center rounded-xl py-3'>
                      Connect Now<span className='ml-2 inline-block text-white'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAr9JREFUSEudVzF2KjEMHJU5Be0/BW0ukW25BCmzl6All0i7p6DlFJTOG1vGki0vL98V7GJ5NDOSjIBLAKT8SZd9MLwMfh8+sgGH0IwaHBbv+Z+nAexnrmG82YaXaVTmcoB5FJexICnjcgDSvRwyx9x+72XKz3flK1H9Evwg4QjgCmAF5G4D7VHnkp3pogEkCPTwsssGpBXA1iO0jnxhxyC/MeMbEg7BLzckMoBtyv4f3DdSDVwAWVS/O5D1ts5n5gRwF+DuqnDwhCD2gdO4ko8FCRf9duIBAD4gOHZMEMA3BBuS+iCgaThY3R5lTCc/NMsrICf9TPrPQDZelkLBEdgqwJYKyOmyFRaZixtvGpxZvVsG9bCLBWBO+iILTYJZ16ME8SLVi+r3T+luv2zQFwjOgRm1FOcMRHXMjrMAiVnVRa031nTX1Ov7RWXoq8EBcFQPRmwPtJ6tM+UkSKpl2EqoP9k6dG4n6BVIz17gMu4Q3ZI1ke+9mYG4nDLyo0pw7BoLQedKmZmLm0k1KSzu7XkqKb296BklhgdNsxJ055n29dFtsAODqKmfnyHWdKX0iuYtbe7hXutqpxk3sKT61Q50b54+aCbzWQ4uNxm79ka0n87Vgmt4Syl4z1p+O672ZnQam1cM9Kkz9S30b0GlPuiCAl+p9HMnpJn30wZSRyNbIBuIXbV1ZuOZlVtnqH2gmcn4idrqyxZYkbNGPwKXlmFRzVYPmdGkz6POxRZY9S19mg4t06msYpxNkNZUOlq5pnpDBXk2VFGvtsZiNszUrisE30h6Ixky8zN4L/EeWX/1qcOcJUFK/RXoRZZd53Kk9ca5eerqpW+cNLOgA8cBuEK1f5FnsQBXLQkz3Gda7hTcROnIXMPka2GDO5TF0rKICsj9T4rKKb7EW1b+xnH8XyuOMacuMHF3CXXzuxgzCPcLFTQwMvWYhckAAAAASUVORK5CYII="/></span>
                 </button>
                 <div>
                 <p className='text-xl ml-4 inline-flex justify-center items-center mt-16 cursor-pointer'>Scroll Down <i className='uil uil-arrow-down text-3xl animate-bounce'></i></p>
              </div>
             </div>
             <div className='h-full grow-1 pt-64 pl-16'>
               <img src={testimonial} width={340} height={300} className='anime border-8 border-indigo-500/75'/>
             </div>
          </div>
      </div>
    </>
  )
}

export default home
