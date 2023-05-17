import React , { useState } from 'react'
import { navbar_items } from '../utils'


const Headers = () => {
   const [activeStyle,setActiveStyle]=useState('Home')

   function setNavbarItemStyle(id){
    setActiveStyle(id)
   }

  return (
    <>
      <header className='bg-transparent'>
        <nav className='flex flex-row justify-around items-center gap-y-4 p-4 fixed z-30 w-full top-0 left-0 right-0 navbar_header border-b-2 bg-opacity-30 backdrop-blur-md'>
          <a href='index.html' className='py-1.5 px-5 '>Chandhu</a>
          <div className='flex gap-y-8 flex-row '>
          {
           navbar_items.map((nav_item,index)=>{
            return (
            <div key={index} className='py-1.5 px-5'>
              <ul>
                <li>
                  <a href={`#${nav_item.name}`} 
                  className={`flex flex-col items-center text-[0.875rem] navbar_list hover:text-nav_link_hover ${activeStyle===`${nav_item.name}`?'uppercase':''}`} 
                  onClick={()=>setNavbarItemStyle(nav_item.name)}
                  >
                    <i className={`uil uil-${nav_item.class} hidden`}></i>{nav_item.name}
                  </a>
                </li>
              </ul>
            </div>
            )
            })
          }
          <i className='uil uil-times sm:hidden block'></i>
         </div>
          <div className='font-medium sm:hidden block'>
            <i className='uil uil-apps'></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Headers
