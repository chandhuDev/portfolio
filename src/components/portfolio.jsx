import React ,{useState} from 'react'
import { projects } from'../utils/index'

const portfolio = () => {
  const [portfolioImage,setPortfolioImage]=useState(3)
  
  const setPortfolio=(id)=>{
   setPortfolioImage(id)
  }
  
return (
    <>
      <div className='w-full h-full flex flex-col md:gap-y-12 gap-y-6 gap items-center justify-center md:py-10 py-1 overflow-x-hidden' id='Portfolio'>
         <div className='w-full'>
          <div className='md:my-10 my-5 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='md:text-3xl text-xl'>Portfolio</h2>
            <p>My recent work</p>
          </div>
          <div className='md:my-10 my-5 md:w-4/5 w-full mx-auto h-full flex flex-row md:gap-x-6 gap-x-2 md:p-5 p-2'>
            {
               projects.map((project)=>{
                return (
                  <div className={`md:rounded-xl rounded-md border-2 cursor-pointer relative ${portfolioImage === project.id ? 'grow image_transition scale-105' : ''}`} 
                  key={project.id} 
                  onClick={()=>setPortfolio(project.id)}
                  >
                    <img src={project.image} alt='image' className={`md:h-[420px] h-64 md:rounded-xl rounded-md w-16 object-center object-cover ${portfolioImage === project.id ? 'w-full' : ''}`}/>
                    { portfolioImage === project.id && 
                    <div className={`absolute md:bottom-2 bottom-1 md:left-3 left-3 flex flex-row justify-evenly md:text-2xl text-xs font-bold md:w-1/4 w-1/2 ${project.id===5 ? 'text-white' : 'text-black/80' }`}>
                      <a href={project.demo} target='_blank' className='cursor-pointer shadow-2xl'><i className='uil uil-github-alt'></i></a>
                      <a href={project.code} target='_blank' className='cursor-pointer shadow-2xl'><i className='uil uil-external-link-alt'></i></a>
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
