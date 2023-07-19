import React from 'react'
import twiter from '../assets/twiter.svg'
import telegram from '../assets/telegram.svg'
import instagram from '../assets/instagram.svg'

const footer = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col gap-y-10 items-center justify-center mx-auto pt-10 pb-5' >
        <h2 className='w-full text-center text-xl'>Chandhu</h2>
         <div className='flex flex-row gap-8'>
           <a href='#About' className='cursor-pointer'>About</a>
           <a href='#Blogs' className='cursor-pointer'>Blogs</a>
           <a href='#Portfolio' className='cursor-pointer'>Portfolio</a>
         </div>
         <div className='flex flex-row gap-5 mb-10'>
           <a href='https://twitter.com/chandhudev' target='_blank'><img src={twiter} alt='twiter' width={30} height={30} className='cursor-pointer'/></a>
           <a href='https://telegram.me/chandhuDev' target='_blank'><img src={telegram} alt='telegram' width={30} height={30} className='cursor-pointer'/></a>
           <a href='https://www.instagram.com/chandhu_mamidi?r=nametag' target='_blank'><img src={instagram} alt='instagram' width={30} height={30} className='cursor-pointer'/></a>
         </div>
      </div>
    </>
  )
}

export default footer
