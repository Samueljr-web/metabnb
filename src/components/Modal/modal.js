import React from 'react'
import { modalItems } from '../../data/data'
import Times from '../../assets/x.png'

function Modal() {
  const handleCloseModal = ()=> {
     const modalContainer = document.querySelector('.modal')
     
      modalContainer.style.display ='none'
      document.body.style.background = "#fff";
      document.body.style.overflowY = "scroll";
   } 
  return (
    <div className='modal hidden'>
        <div className='absolute left-[30%] top-[50%] bg-white shadow-md rounded-lg w-[28rem] h-[18rem] z-10'>
          <div className='flex items-center justify-between p-5'>
             <h2 className='text-lg'>Connect Wallet</h2>
             <button onClick={handleCloseModal}>
              <img src={Times} alt='close-icon' className='h-5'/>
             </button>
          </div>
          <hr className='w-full' />
          <div className='space-y-5 p-5'>
            <h4>Choose your preferred wallet:</h4>
            {modalItems.map((items) =>{
              return(   
                <div key={items.id} className='p-1 rounded-lg flex items-center justify-between border-[1px]'>
                  <div className='flex items-center space-x-2'>
                    <img src={items.icon} alt={items.imgAlt} className='w-10'/>
                    <h2>{items.text}</h2>
                  </div>
                  <div>
                    <img src={items.chevron} alt='right-chevron' />
                  </div>
               </div>
              )
            })}
         </div>
        </div>
    </div>
  )
}

export default Modal