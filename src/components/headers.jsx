import React , { useState , useEffect } from 'react'
import { navbar_items } from '../utils'


const Headers = () => {
   const [activeStyle,setActiveStyle]=useState('Home')
   const [screenWidth, setScreenWidth] = useState(window.innerWidth)
   const [openNavbar,setOpenNavbar]=useState(false)

   function setNavbarItemStyle(id){
    setActiveStyle(id)
   }
   
   useEffect(() => {
    function handleResize() {
     setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  }, [])

 

  return (
    <>
      <header className='bg-transparent'>
        <nav className={`flex md:flex-row flex-col md:justify-around justify-center items-center md:gap-y-4 gap-y-0 md:p-4 p-2 fixed z-30 w-full ${
          screenWidth >=600 ? 'top-0' : 'bottom-0'} left-0 right-0 navbar_header md:border-b-2 border-b-0 bg-opacity-30 backdrop-blur-md`}>
          <a href='index.html' className='py-1.5 px-5 md:inline hidden'>Chandhu</a>
          <div className='md:flex hidden gap-y-8 flex-row'>
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
                    {nav_item.name}
                  </a>
                </li>
              </ul>
            </div>
            )
            })
          }
         </div>
          <i className='uil uil-times hidden'></i>
          {openNavbar&&
           <div className={`w-full h-full rounded-2xl border-2 border-b-0 border-black/10 shadow-inner rounded-br-none rounded-bl-none p-2 grid grid-cols-3 gap-2 overflow-x-hidden ${screenWidth > 540 && 'hidden'}`}>
            { navbar_items.map((nav_item,index)=>{
              return (
              <div className='flex flex-col justify-center items-center cursor-pointer p-3' key={index}>
                 <p>{nav_item.name}</p>
                 <a href={`#${nav_item.name}`}><i className={`uil uil-${nav_item.class} text-2xl`}></i></a>
              </div>
              )
            })
            }
          </div>
          }
          <div className='font-medium md:hidden flex flex-row justify-center items-center w-full text-3xl'>
            <i className={`uil uil-${openNavbar ? 'times-square' : 'apps'} cursor-pointer ease-in-out duration-300`} onClick={()=>setOpenNavbar(!openNavbar)}></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Headers
