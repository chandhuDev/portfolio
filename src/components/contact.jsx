import React from 'react'
import emailjs from 'emailjs-com'
import { contact_type } from '../utils/index'

const service_id=import.meta.env.VITE_EMAIL_SERVICE_ID
const template_id=import.meta.env.VITE_EMAIL_TEMPLATE_ID


const contact = () => {

  const sendMail = (e) => {
    e.preventDefault();
  
    // Get form data
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.project.value;
  
    
    emailjs.send(service_id, template_id, { name, email, message },)
      .then((result) => {
        console.log("Email sent successfully!", result);
        
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };




  return (
    <>
      <div className='w-full h-full flex flex-row gap-x-8 items-center justify-center py-10' id='Contact'>
        <div className='w-3/4'>
          <div className='mt-10 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='text-3xl'>Contact Me</h2>
            <p>Get in touch</p>
          </div>
          <h2 className='w-2/4 text-center mx-auto my-10 text-lg font-light'>Have a question, new opportunity, or just want to have a quick chat ? Feel free to send me a message</h2>
          <div className='flex flex-row justify-around'>
            <div className='flex flex-col gap-y-5'>
               <p className='text-2xl w-full text-center block'>Talk to me</p>
               {
                contact_type.map((contact_info,index)=>{
                    return (
                        <div key={index} className='w-full h-full grid content-center text-center justify-center px-16 cursor-pointer rounded-lg shadow-md border-2'>
                           <i className={`uil uil-${contact_info.class} text-2xl`}></i>
                           <div className='flex flex-col justify-center items-center'>
                             <p className='text-xl'>{contact_info.social_name}</p>
                             <p className='text-sm'>{contact_info.value}</p>
                            </div>
                           <p className='inline-flex justify-center items-center w-full cursor-pointer'>Write me<span className='ml-1'><i className='uil uil-arrow-right text-2xl hover:translate-x-1'></i></span></p> 
                        </div>   
                    )
                })
               }
            </div>
            <div className='flex flex-col gap-y-5'>
              <p className='text-2xl w-full text-center block'>Write your Project</p>
               <form className='text-base rounded-md shadow-xl border-2 p-6 space-y-12' onSubmit={sendMail}>
                <div className='relative'>
                  <label className='absolute z-20 left-6 -top-3 bg-white px-1'>Name</label>
                  <input
                  type='text'
                  name='name'
                  placeholder='Insert your name'
                  className='rounded-md p-3 border-black/30 border-2 w-full'/>
                </div>
                <div className='relative'>
                  <label className='absolute z-20 left-6 -top-3 bg-white px-1'>Email</label>
                  <input
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                  className='rounded-md p-3 border-black/30 border-2 w-full'/>
                </div>
                <div className='relative'>
                  <label className='absolute z-20 left-6 -top-3 bg-white px-1'>Project</label>
                  <textarea
                  name='project'
                  cols={40}
                  rows={10}
                  placeholder='Write your project description'
                  className='rounded-md p-4 border-black/30 border-2'>
                  </textarea>
                </div>
                <button className='bg-blue-900 hover:bg-blue-900/80 hover:duration-300 text-white w-full inline-flex justify-center items-center rounded-xl ml-3 py-3 contact_button' onSubmit={sendMail}>
                      Connect Now<span className='ml-3 inline-block contact_button_span'><i class="uil uil-message"></i></span>
                </button>
               </form>
            </div>
          <div>

            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default contact
