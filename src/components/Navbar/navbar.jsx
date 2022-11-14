import React from 'react'
import Logo from '../../assets/logo.png'
import{Link} from 'react-router-dom'

function Navbar() {

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

        <div className='md:relative md:block hidden fixed top-0 left-0 z-10 md:bg-inherit md:bg-[#A02279] bg-[#222] md:p-0 md:h-0 h-full p-10'>
            <ul className='flex md:flex-row flex-col lg:space-x-8 md:space-x-3 leading-10 md:text-[#434343] text-white'>
                <Link to='/'>Home</Link>
                <Link to='placetostay'>Place to stay</Link>
                <Link to='/'>NFTs</Link>
                <Link to='/'>Community</Link>
            </ul>
        </div>

        <div className='leading-10'>
          <button
             href='/' 
             className='py-3 md:px-5 px-2 md:w-fit w-[8rem] text-sm bg-[#A02279] text-white rounded-lg'
             onClick={handleModal}>
            Connect wallet
          </button>
        </div>
       
     </nav>
    </div>
  )
}

export default Navbar