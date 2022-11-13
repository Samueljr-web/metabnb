import React from 'react'
import Logo from '../../assets/logo.png'
import{Link} from 'react-router-dom'

function Navbar() {

  const handleModal = () => {
    const modal = document.querySelector('.modal')
    modal.style.display ='block'
    document.body.style.background ='rgba(64, 64, 64, 0.3)'
    document.body.style.overflowY = 'hidden'

  }

  return (
    <div>
     <nav className='flex justify-between pt-6 xl:px-20 md:px-9 px-6'>
        <div className='md:w-[10rem] xl:w-fit'>
          <img src={Logo} alt="nav_brand" className='w-full'></img>
        </div>

        <div className='md:relative fixed top-0 left-0 z-10 md:bg-inherit md:bg-[#A02279] bg-[#222] md:p-0 md:h-0 h-full p-10'>
            <ul className='flex md:flex-row flex-col lg:space-x-8 md:space-x-3 leading-10 md:text-[#434343] text-white'>
                <Link to='/'>Home</Link>
                <Link to='placetostay'>Place to stay</Link>
                <Link to='/'>NFTs</Link>
                <Link to='/'>Community</Link>
                  <button 
                    className='md:hidden block p-2  text-sm bg-[#A02279] text-white rounded-lg'>
                    Connect wallet
                  </button>
            </ul>
        </div>

        <div className='md:block hidden leading-10'>
          <button
             href='/' 
             className='p-2 px-5 bg-[#A02279] text-white rounded-lg'
             onClick={handleModal}>
            Connect wallet
          </button>
        </div>
       
     </nav>
    </div>
  )
}

export default Navbar