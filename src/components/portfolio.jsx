import React ,{useState} from 'react'
import { projects } from'../utils/index'
import  projectImage  from'../assets/profile.jpg'

const portfolio = () => {
  const [portfolioImage,setPortfolioImage]=useState(3)


  const setPortfolio=(id)=>{
   setPortfolioImage(id)
  }
  

  return (
    <>
      <div className='w-full h-full flex flex-col md:gap-y-12 gap-y-6 gap items-center justify-center md:py-10 py-1' id='Portfolio'>
         <div className='w-full'>
          <div className='md:my-10 my-5 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='md:text-3xl text-xl'>Portfolio</h2>
            <p>My recent work</p>
          </div>
          <div className='md:my-10 my-5 md:w-3/4 w-[90%] mx-auto h-full flex flex-row md:gap-x-5 gap-x-1 md:p-5 p-3'>
            {
               projects.map((project)=>{
                return (
                  <div className={`md:rounded-xl rounded-md border-2 cursor-pointer relative ${portfolioImage === project.id ? 'grow image_transition scale-105' : ''}`} 
                  key={project.id} 
                  onClick={()=>setPortfolio(project.id)}
                  >
                    <img src={projectImage} alt='image' className={`md:h-[420px] h-64 md:rounded-xl rounded-md w-24 object-cover ${portfolioImage === project.id ? 'w-full' : ''}`}/>
                    { portfolioImage === project.id && 
                    <div className='absolute md:bottom-3 bottom-1 md:left-5 left-3 flex flex-row justify-evenly md:text-2xl text-xs text-white font-medium md:w-1/3 w-1/2'>
                      <p className='cursor-pointer shadow-2xl'>Code</p>
                      <p className='cursor-pointer shadow-2xl'>Live</p>
                    </div>
                    }
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
