import React ,{useState} from 'react'
import { projects } from'../utils/index'
import  projectImage  from'../assets/profile.jpg'

const portfolio = () => {
  const [portfolioImage,setPortfolioImage]=useState(3)

  return (
    <>
      <div className='w-full h-full flex flex-col md:gap-y-12 gap-y-6 gap items-center justify-center md:py-10 py-1' id='Portfolio'>
         <div className='w-full'>
          <div className='md:my-10 my-5 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='md:text-3xl text-xl'>Portfolio</h2>
            <p>My recent work</p>
          </div>
          <div className='md:my-10 my-2 grid grid-cols-3 md:p-12 p-1'>
             {
                projects.map((project,index)=>{
                    return (
                        <div key={index} className='flex flex-col w-full h-full rounded-md shadow-lg border-2 border-black/40 cursor-pointer relative hover:scale-105 duration-300 ease-in-out bg-transparent'>
                            <img src={project.image} alt='roject_image' className='w-full h-full rounded-md'/>
                            <div className='flex flex-row justify-evenly opacity-90 md:gap-2 gap-1 absolute bottom-0 text-white left-0 w-full h-1/6 rounded-br-none rounded-bl-none rounded-md backdrop-blur-lg'>
                             <p>{project.code}</p>
                             <p>{project.demo}</p>
                            </div>
                        </div>
                    )
                })
             }
          </div>
          {/* <div className='my-10 w-2/3 mx-auto h-full flex flex-row gap-x-5 bg-yellow-600 justify-between p-5'>
            {
               projects.map((project,index)=>{
                return (
                  <div className={`rounded-xl border-2 bg-cover h-full cursor-pointer ${portfolioImage=== project.id ? 'grow' : 'grow-0'}`} 
                  key={index} 
                  onClick={()=>setPortfolioImage(project.id)}
                  //style={{backgroundImage:`url(${projectImage})`}}
                  >
                     <img src={projectImage} alt='image' className='h-[420px] rounded-xl set_width'/>
                  </div>
                )
               })   
            }
          </div>  */}
        </div>
      </div>
    </>
  )
}

export default portfolio
