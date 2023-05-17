import React from 'react'
import testimonial  from '../assets/testimonial1.png'

const home = () => {
  return (
    <>
      <div id='Home' className='flex md:flex-none flex-col justify-center items-center w-full h-full'>
          <div className='flex md:flex-row flex-col w-full h-full md:pl-40 justify-between md:pr-28 pl-5 pr-5'>
             <div className='w-auto h-auto md:pt-72 pt-14 md:pb-0 pb-10 md:grow-0'>
                 <div className='flex md:flex-col flex-row md:gap-y-10 gap-x-6 w-full justify-center h-full md:text-3xl text-6xl'>
                    <a href='https://github.com/chandhuDev' className='cursor-pointer'><i className='uil uil-github-alt'></i></a> 
                    <a href='https://twitter.com/chandhudev' className='cursor-pointer'><i className='uil uil-twitter-alt'></i></a>
                    <a href='https://www.linkedin.com/in/chandhudev/' className='cursor-pointer'><i className='uil uil-linkedin-alt'></i></a>
                 </div>
             </div>
             <div className='w-[45%] h-full grow-0 md:flex hidden flex-col gap-y-8 pt-48 ml-4'>
                 <h1 className='md:text-6xl text-3xl font-medium'>Chandhu <span>🖐</span></h1>
                 <div className='flex flex-row items-center'>
                  <p className='bg-black/40 md:w-28 w-20 h-1 mx-2 inline-block'></p>
                  <h2 className='md:text-2xl text-xl'>Full-Stack Developer</h2>
                 </div>
                 
                 <h4 className='md:text-xl text-base font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti accusantium quidem sint veritatis aperiam eveniet aliquid iusto? Veniam unde </h4>
                 <button className='bg-black/90 hover:bg-black/70 hover:duration-300 text-white w-2/4 inline-flex justify-center items-center rounded-xl py-3 home_button'>
                      Connect Now<span className='ml-2 inline-block home_button_hover'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAr9JREFUSEudVzF2KjEMHJU5Be0/BW0ukW25BCmzl6All0i7p6DlFJTOG1vGki0vL98V7GJ5NDOSjIBLAKT8SZd9MLwMfh8+sgGH0IwaHBbv+Z+nAexnrmG82YaXaVTmcoB5FJexICnjcgDSvRwyx9x+72XKz3flK1H9Evwg4QjgCmAF5G4D7VHnkp3pogEkCPTwsssGpBXA1iO0jnxhxyC/MeMbEg7BLzckMoBtyv4f3DdSDVwAWVS/O5D1ts5n5gRwF+DuqnDwhCD2gdO4ko8FCRf9duIBAD4gOHZMEMA3BBuS+iCgaThY3R5lTCc/NMsrICf9TPrPQDZelkLBEdgqwJYKyOmyFRaZixtvGpxZvVsG9bCLBWBO+iILTYJZ16ME8SLVi+r3T+luv2zQFwjOgRm1FOcMRHXMjrMAiVnVRa031nTX1Ov7RWXoq8EBcFQPRmwPtJ6tM+UkSKpl2EqoP9k6dG4n6BVIz17gMu4Q3ZI1ke+9mYG4nDLyo0pw7BoLQedKmZmLm0k1KSzu7XkqKb296BklhgdNsxJ055n29dFtsAODqKmfnyHWdKX0iuYtbe7hXutqpxk3sKT61Q50b54+aCbzWQ4uNxm79ka0n87Vgmt4Syl4z1p+O672ZnQam1cM9Kkz9S30b0GlPuiCAl+p9HMnpJn30wZSRyNbIBuIXbV1ZuOZlVtnqH2gmcn4idrqyxZYkbNGPwKXlmFRzVYPmdGkz6POxRZY9S19mg4t06msYpxNkNZUOlq5pnpDBXk2VFGvtsZiNszUrisE30h6Ixky8zN4L/EeWX/1qcOcJUFK/RXoRZZd53Kk9ca5eerqpW+cNLOgA8cBuEK1f5FnsQBXLQkz3Gda7hTcROnIXMPka2GDO5TF0rKICsj9T4rKKb7EW1b+xnH8XyuOMacuMHF3CXXzuxgzCPcLFTQwMvWYhckAAAAASUVORK5CYII="/></span>
                 </button>
                 <a className='text-xl inline-flex justify-start ml-8 items-center mt-16 cursor-pointer'>
                  <svg
                width="32px"
                height="32px"
                class="home__scroll-mouse"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: "1.5",
                }}
                >
                <path
                  class="wheel"
                  d="M123.359,79.775l0,72.843"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "20px",
                  }}
                ></path>
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "20px",
                  }}
                ></path>
                  </svg>
                  <span>Scroll Down</span>
                  <i className='uil uil-arrow-down text-3xl'></i>
                 </a>
             </div>
             <div className='h-full md:grow-1 md:pt-64 pt-0 md:pl-16 pl-0'>
               <img src={testimonial} width={340} height={300} className='anime border-8 border-indigo-500/75'/>
             </div>
          </div>
          <div className='w-full p-12 md:hidden h-full flex flex-col gap-y-5 md:pt-48 pt-8'>
                 <h1 className='md:text-6xl text-3xl font-medium'>Chandhu <span>🖐</span></h1>
                 <div className='flex flex-row items-center'>
                  <p className='bg-black/40 md:w-28 w-16 h-1 mx-2 inline-block'></p>
                  <h2 className='md:text-2xl text-xl'>Full-Stack Developer</h2>
                 </div>
                 
                 <h4 className='md:text-xl text-base font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti accusantium quidem sint veritatis aperiam eveniet aliquid iusto? Veniam unde </h4>
                 <button className='bg-black/90 hover:bg-black/70 hover:duration-300 text-white w-3/4 inline-flex justify-center items-center rounded-xl py-3 px-4 home_button'>
                      Connect Now<span className='ml-2 inline-block home_button_hover'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAr9JREFUSEudVzF2KjEMHJU5Be0/BW0ukW25BCmzl6All0i7p6DlFJTOG1vGki0vL98V7GJ5NDOSjIBLAKT8SZd9MLwMfh8+sgGH0IwaHBbv+Z+nAexnrmG82YaXaVTmcoB5FJexICnjcgDSvRwyx9x+72XKz3flK1H9Evwg4QjgCmAF5G4D7VHnkp3pogEkCPTwsssGpBXA1iO0jnxhxyC/MeMbEg7BLzckMoBtyv4f3DdSDVwAWVS/O5D1ts5n5gRwF+DuqnDwhCD2gdO4ko8FCRf9duIBAD4gOHZMEMA3BBuS+iCgaThY3R5lTCc/NMsrICf9TPrPQDZelkLBEdgqwJYKyOmyFRaZixtvGpxZvVsG9bCLBWBO+iILTYJZ16ME8SLVi+r3T+luv2zQFwjOgRm1FOcMRHXMjrMAiVnVRa031nTX1Ov7RWXoq8EBcFQPRmwPtJ6tM+UkSKpl2EqoP9k6dG4n6BVIz17gMu4Q3ZI1ke+9mYG4nDLyo0pw7BoLQedKmZmLm0k1KSzu7XkqKb296BklhgdNsxJ055n29dFtsAODqKmfnyHWdKX0iuYtbe7hXutqpxk3sKT61Q50b54+aCbzWQ4uNxm79ka0n87Vgmt4Syl4z1p+O672ZnQam1cM9Kkz9S30b0GlPuiCAl+p9HMnpJn30wZSRyNbIBuIXbV1ZuOZlVtnqH2gmcn4idrqyxZYkbNGPwKXlmFRzVYPmdGkz6POxRZY9S19mg4t06msYpxNkNZUOlq5pnpDBXk2VFGvtsZiNszUrisE30h6Ixky8zN4L/EeWX/1qcOcJUFK/RXoRZZd53Kk9ca5eerqpW+cNLOgA8cBuEK1f5FnsQBXLQkz3Gda7hTcROnIXMPka2GDO5TF0rKICsj9T4rKKb7EW1b+xnH8XyuOMacuMHF3CXXzuxgzCPcLFTQwMvWYhckAAAAASUVORK5CYII="/></span>
                 </button>
                 <a className='text-xl md:inline-flex hidden justify-start ml-8 items-center mt-16 cursor-pointer px-4'>
                  <svg
                width="32px"
                height="32px"
                class="home__scroll-mouse"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: "1.5",
                }}
                >
                <path
                  class="wheel"
                  d="M123.359,79.775l0,72.843"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "20px",
                  }}
                ></path>
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "20px",
                  }}
                ></path>
                  </svg>
                  <span>Scroll Down</span>
                  <i className='uil uil-arrow-down text-3xl'></i>
                 </a>
          </div>
      </div>
    </>
  )
}

export default home
