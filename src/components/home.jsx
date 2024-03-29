import React from 'react'
import profile  from '../assets/profile.jpg'

const home = () => {
  return (
    <>
      <div id='Home' className='flex md:flex-none flex-col justify-center items-center w-full h-full overflow-x-hidden'>
          <div className='flex md:flex-row flex-col w-full h-full md:pl-40 justify-between md:pr-28 pl-5 pr-5'>
             <div className='w-auto h-auto md:pt-72 pt-14 md:pb-0 pb-10 md:grow-0'>
                 <div className='flex md:flex-col flex-row md:gap-y-10 gap-x-6 w-full justify-center h-full md:text-3xl text-6xl'>
                    <a href='https://github.com/chandhuDev'  target='_blank' className='cursor-pointer'><i className='uil uil-github-alt'></i></a> 
                    <a href='https://twitter.com/chandhudev' target='_blank'  className='cursor-pointer'><i className='uil uil-twitter-alt'></i></a>
                    <a href='https://www.linkedin.com/in/chandhudev/' target='_blank' className='cursor-pointer'><i className='uil uil-linkedin-alt'></i></a>
                 </div>
              </div>
             <div className='w-[45%] h-full grow-0 md:flex hidden flex-col gap-y-8 pt-48 ml-4'>
                 <h1 className='md:text-6xl text-3xl font-medium'>Chandhu <span>🖐</span></h1>
                 <div className='flex flex-row items-center'>
                  <p className='bg-black/40 md:w-28 w-20 h-1 mx-2 inline-block'></p>
                  <h2 className='md:text-2xl text-xl'>Full-Stack Developer</h2>
                 </div>
                 <h4 className='md:text-xl text-base font-bold mt-10'>Have the experience in efficiently building and deploying large-scale web applications in <span className='text-black font-extrabold'>Node.js, React.js and Next.js </span>at accelerated pace.I excel in developing products utilizing JavaScript language and its frameworks.</h4>
                 <a href='#Contact' className='bg-black/90 hover:bg-black/70 hover:duration-300 text-white w-2/4 inline-flex justify-center items-center rounded-xl py-3 home_button mt-14'>
                      Connect Now<span className='ml-2 inline-block home_button_hover'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAr9JREFUSEudVzF2KjEMHJU5Be0/BW0ukW25BCmzl6All0i7p6DlFJTOG1vGki0vL98V7GJ5NDOSjIBLAKT8SZd9MLwMfh8+sgGH0IwaHBbv+Z+nAexnrmG82YaXaVTmcoB5FJexICnjcgDSvRwyx9x+72XKz3flK1H9Evwg4QjgCmAF5G4D7VHnkp3pogEkCPTwsssGpBXA1iO0jnxhxyC/MeMbEg7BLzckMoBtyv4f3DdSDVwAWVS/O5D1ts5n5gRwF+DuqnDwhCD2gdO4ko8FCRf9duIBAD4gOHZMEMA3BBuS+iCgaThY3R5lTCc/NMsrICf9TPrPQDZelkLBEdgqwJYKyOmyFRaZixtvGpxZvVsG9bCLBWBO+iILTYJZ16ME8SLVi+r3T+luv2zQFwjOgRm1FOcMRHXMjrMAiVnVRa031nTX1Ov7RWXoq8EBcFQPRmwPtJ6tM+UkSKpl2EqoP9k6dG4n6BVIz17gMu4Q3ZI1ke+9mYG4nDLyo0pw7BoLQedKmZmLm0k1KSzu7XkqKb296BklhgdNsxJ055n29dFtsAODqKmfnyHWdKX0iuYtbe7hXutqpxk3sKT61Q50b54+aCbzWQ4uNxm79ka0n87Vgmt4Syl4z1p+O672ZnQam1cM9Kkz9S30b0GlPuiCAl+p9HMnpJn30wZSRyNbIBuIXbV1ZuOZlVtnqH2gmcn4idrqyxZYkbNGPwKXlmFRzVYPmdGkz6POxRZY9S19mg4t06msYpxNkNZUOlq5pnpDBXk2VFGvtsZiNszUrisE30h6Ixky8zN4L/EeWX/1qcOcJUFK/RXoRZZd53Kk9ca5eerqpW+cNLOgA8cBuEK1f5FnsQBXLQkz3Gda7hTcROnIXMPka2GDO5TF0rKICsj9T4rKKb7EW1b+xnH8XyuOMacuMHF3CXXzuxgzCPcLFTQwMvWYhckAAAAASUVORK5CYII="/></span>
                 </a>
              </div>
             <div className='h-full md:grow-1 md:pt-48 pt-0 md:pl-16 pl-0'>
               <img src={profile} width={400} height={200} className='anime border-4 object-cover border-indigo-500/75'/>
             </div>
          </div>
          <div className='w-full p-8 md:hidden h-full flex flex-col md:gap-y-5 gap-y-2.5 md:pt-48 pt-8'>
                 <h1 className='md:text-6xl text-3xl font-medium'>Chandhu <span>🖐</span></h1>
                 <div className='flex flex-row items-center'>
                  <p className='bg-black/40 md:w-28 w-16 h-1 mx-2 md:mr-0 mr-4 inline-block'></p>
                  <h2 className='md:text-2xl text-xl'>Full-Stack Developer</h2>
                 </div>
                 <h4 className='md:text-xl text-base font-bold'>Have the experience in efficiently building and deploying large-scale web applications in <span className='text-black font-extrabold'>Node.js, React.js and Next.js </span>at accelerated pace.I excel in developing products utilizing JavaScript language and its frameworks.</h4>
                 <a href='#Contact' className='bg-black/80 hover:bg-black/70 hover:duration-300 text-white/40 w-3/4 inline-flex justify-center items-center rounded-xl py-3 px-4 home_button md:mt-6 mt-2'>
                      Connect Now<span className='ml-2 inline-block home_button_hover'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAr9JREFUSEudVzF2KjEMHJU5Be0/BW0ukW25BCmzl6All0i7p6DlFJTOG1vGki0vL98V7GJ5NDOSjIBLAKT8SZd9MLwMfh8+sgGH0IwaHBbv+Z+nAexnrmG82YaXaVTmcoB5FJexICnjcgDSvRwyx9x+72XKz3flK1H9Evwg4QjgCmAF5G4D7VHnkp3pogEkCPTwsssGpBXA1iO0jnxhxyC/MeMbEg7BLzckMoBtyv4f3DdSDVwAWVS/O5D1ts5n5gRwF+DuqnDwhCD2gdO4ko8FCRf9duIBAD4gOHZMEMA3BBuS+iCgaThY3R5lTCc/NMsrICf9TPrPQDZelkLBEdgqwJYKyOmyFRaZixtvGpxZvVsG9bCLBWBO+iILTYJZ16ME8SLVi+r3T+luv2zQFwjOgRm1FOcMRHXMjrMAiVnVRa031nTX1Ov7RWXoq8EBcFQPRmwPtJ6tM+UkSKpl2EqoP9k6dG4n6BVIz17gMu4Q3ZI1ke+9mYG4nDLyo0pw7BoLQedKmZmLm0k1KSzu7XkqKb296BklhgdNsxJ055n29dFtsAODqKmfnyHWdKX0iuYtbe7hXutqpxk3sKT61Q50b54+aCbzWQ4uNxm79ka0n87Vgmt4Syl4z1p+O672ZnQam1cM9Kkz9S30b0GlPuiCAl+p9HMnpJn30wZSRyNbIBuIXbV1ZuOZlVtnqH2gmcn4idrqyxZYkbNGPwKXlmFRzVYPmdGkz6POxRZY9S19mg4t06msYpxNkNZUOlq5pnpDBXk2VFGvtsZiNszUrisE30h6Ixky8zN4L/EeWX/1qcOcJUFK/RXoRZZd53Kk9ca5eerqpW+cNLOgA8cBuEK1f5FnsQBXLQkz3Gda7hTcROnIXMPka2GDO5TF0rKICsj9T4rKKb7EW1b+xnH8XyuOMacuMHF3CXXzuxgzCPcLFTQwMvWYhckAAAAASUVORK5CYII="/></span>
                 </a>
          </div>
      </div>
    </>
  )
}

export default home
