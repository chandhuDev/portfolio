import React, { useRef, useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import { contact_type } from '../utils/index'

const service_id=import.meta.env.VITE_EMAIL_SERVICE_ID
const template_id=import.meta.env.VITE_EMAIL_TEMPLATE_ID
const public_id=import.meta.env.VITE_EMAIL_PUBLIC_ID

const contact = () => {
  const form = useRef(null)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  const sendMail = (e) => {
    e.preventDefault()
    const user_name = e.target.elements.user_name.value
    const user_email = e.target.elements.user_email.value
    const message = e.target.elements.message.value
    emailjs.send(service_id, template_id,{ user_name , user_email , message},public_id)
      .then((result) => {
        console.log("Email sent successfully!", result)
        const modalOpen=document.querySelector('dialog')
        const closeModal=document.querySelector('.dialog_close')
        modalOpen.showModal()
        closeModal.addEventListener('click',()=>{
          modalOpen.close()
        })
      })
      .catch((error) => {
        console.error("Error sending email:", error)
      })
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])

//{`${screenWidth > 620 ? 40 : screenWidth > 400 ? 30 : 28 }`}
  return (
    <>
      <div className='w-full h-full flex md:flex-row flex-col md:gap-x-8 gap-y-4 items-center md:justify-evenly justify-center md:py-10 py-5 overflow-x-hidden' id='Contact'>
        <div className='md:w-4/5 w-[80%]'>
          <div className='md:mt-10 mt-5 w-full flex justify-center items-center flex-col gap-1'>
            <h2 className='md:text-3xl text-xl'>Contact Me</h2>
            <p>Get in touch</p>
          </div>
          <h2 className='md:w-2/4 w-4/5 text-center mx-auto md:my-10 my-5 md:text-lg text-sm font-light'>Have a question, new opportunity, or just want to have a quick chat ? Feel free to send me a message</h2>
          <div className='flex md:flex-row md:ml-16 ml-0 flex-col justify-around'>
            <div className='flex flex-col md:gap-y-5 gap-y-3 items-center ml-0 md:ml-12'>
               <p className='md:text-2xl text-xl w-full md:mb-0 mb-3 text-center block font-normal'>Talk to me</p>
               {
                contact_type.map((contact_info,index)=>{
                    return (
                        <div key={index} className='md:w-full md:h-full w-4/5 h-4/5 grid content-center text-center justify-center md:px-16 p-3 cursor-pointer rounded-lg shadow-md border-2'>
                           <i className={`uil uil-${contact_info.class} md:text-2xl text-4xl`}></i>
                           <div className='md:flex hidden flex-col justify-center items-center'>
                             <p className='md:text-xl text-base'>{contact_info.social_name}</p>
                             <p className='md:text-sm text-xs'>{contact_info.value}</p>
                            </div>
                            <a href={contact_info.url} target='_blank'><p className='inline-flex justify-center items-center w-full cursor-pointer'>Write me<span className='ml-1'><i className='uil uil-arrow-right md:text-2xl text-base hover:translate-x-1'></i></span></p></a> 
                        </div>   
                    )
                })
               }
            </div>
            <div className='flex flex-col md:gap-y-5 gap-y-3 md:mt-0 mt-4 md:ml-28 ml-0'>
              <p className='md:text-2xl text-xl font-normal w-full text-center block md:mb-0 mb-3'>Write your Project</p>
               <form className='md:text-base text-sm rounded-md shadow-lg border-2 md:p-6 p-4 md:space-y-12 space-y-8' ref={form} onSubmit={sendMail}>
                <div className='relative'>
                  <label className='absolute z-20 left-6 -top-3 bg-white/95 px-1'>Name</label>
                  <input
                  type='text'
                  name='user_name'
                  placeholder='Insert your name'
                  className='rounded-md md:p-3 p-1.5 border-black/30 border-2 w-full'
                  required/>
                </div>
                <div className='relative'>
                  <label className='absolute z-20 left-6 -top-3 bg-white/95 px-1'>Email</label>
                  <input
                  type='email'
                  name='user_email'
                  placeholder='Enter your email address'
                  className='rounded-md md:p-3 p-1.5 border-black/30 border-2 w-full'
                  required/>
                </div>
                <div className='relative'>
                  <label className='absolute z-20 left-6 -top-3 bg-white/95 px-1'>Project</label>
                  <textarea
                  name='message'
                  cols="28"
                  rows="10"
                  placeholder='Write your project description'
                  className='rounded-md md:p-4 p-2 border-black/30 border-2'
                  required
                  >
                  </textarea>
                </div>
                <button className='bg-blue-900 hover:bg-blue-900/80 hover:duration-300 text-white w-full inline-flex justify-center items-center rounded-xl md:ml-3 ml-1 md:py-3 py-1.5 contact_button'>
                      Connect Now<span className='md:ml-3 ml-1 inline-block contact_button_span'><i class="uil uil-message"></i></span>
                </button>
               </form>
             </div>
           <div>

            </div>
          </div> 
        </div>
        <dialog>
         <h2>Successfully sent!</h2>
         <button className='p-1 rounded-2xl bg-black/50 text-white dialog_close'>Close</button>
        </dialog>
      </div>
    </>
  )
}

export default contact
