import React, {useState, useRef} from 'react'
import {gsap} from "gsap";
import Logo from '../../assets/logo.png'
import{Link} from 'react-router-dom'
import Menu from '../../assets/bento-filled.svg'

function Navbar() {
  const [IsOpen, setIsOpen] = useState(false);
   const menuRef = useRef(null);
  const handleIsOpen = () => {
    if (IsOpen) {
      gsap.to(menuRef.current, 0.5, {
        opacity: 0,
        visibility: "hidden",
        x: "-100%",
      });
    } else {
      gsap.to(menuRef.current, 1, {
        opacity: 1,
        visibility: "visible",
        x: "0",
        ease: 'bounce'
      });
    }
    setIsOpen(!IsOpen);
  };
  const handleModal = () => {
    const modal = document.querySelector('.modal')
    modal.style.display ='block'
    // document.body.style.overflow = 'hidden'
  }

  return (
    <div>
     <nav className='flex justify-between pt-6 xl:px-20 md:px-9 px-2'>
        <div className='md:w-[10rem] xl:w-fit w-[10rem]'>
          <img src={Logo} alt="nav-brand" className='w-full' />
        </div>
            <div onClick={() => handleIsOpen()} ref={menuRef} className='md:relative fixed top-0 left-0 translate-x-[-100%] z-10 md:bg-inherit md:bg-[#A02279] bg-[#222] md:p-0 md:h-0 h-full p-10'>
            <ul className='flex md:flex-row flex-col lg:space-x-8 md:space-x-3 leading-10 md:text-[#434343] text-white'>
                <Link to='/'>Home</Link>
                <Link to='placetostay'>Place to stay</Link>
                <Link to='/'>NFTs</Link>
                <Link to='/'>Community</Link>
                 <button
                    href='/' 
                    className='md:hidden block mt-2 py-2 px-2 w-[8rem] text-sm bg-[#A02279] text-white rounded-lg'
                    onClick={handleModal}>
                    Connect wallet
                </button>
            </ul>
        </div>
      
    

        <div className='leading-10'>
          <button
             href='/' 
             className='hidden md:block py-3 md:px-5 px-2 md:w-fit w-[8rem] text-sm bg-[#A02279] text-white rounded-lg'
             onClick={handleModal}>
            Connect wallet
          </button>
          <button className='md:hidden block mr-2 outline-none' onClick={() => handleIsOpen()}>
            <img src={Menu} alt='' />
          </button>
        </div>
       
     </nav>
    </div>
  )
}

export default Navbar