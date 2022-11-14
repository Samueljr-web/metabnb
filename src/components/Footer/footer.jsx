import React from 'react'
import Metabnb from '../../assets/logo-white.png'
import { socialIcons, quicklinks, quicklinks1, quicklinks2 } from '../../data/data';

function Footer() {
    let Year = new Date().getFullYear()
  return (
    <div className='flex bg-[#1D1D1E] text-white p-10 md:px-16 mt-5'>
       
        <div className="grid md:grid-cols-4 grid-cols-1 lg:space-x-36 md:space-x-10 space-x-0">
          <div className='mr-5'>
           <img src={Metabnb} alt='metabnb-logo' className='md:w-fit w-[13rem]' />
             <div className='md:block hidden'>
             <div className='flex space-x-5 mt-14'>
               {socialIcons.map((social, index) =>{
                return (
                     <a href={social.link} key={index}>
                    <img src={social.icon} alt={social.alt} />
                </a>
                )
               })}
             </div>
           <h4 className='mt-10'>&copy; {Year} Metabnb</h4>
          </div>
          </div>
          <div className='mt-5'>
            <h2>Community</h2>
            {quicklinks?.map((link, linkid) => {
              return (
                <div key={linkid} className="">
                  <ul>
                    <li className="my-2">
                      <a href={link.link} className="text-[0.8rem]">
                        {link.name}
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className='mt-5'>
            <h2>Places</h2>
            {quicklinks1?.map((link, linkid) => {
              return (
                <div key={linkid}>
                  <ul>
                    <li className="my-2">
                      <a href={link.link} className="text-[0.8rem]">
                        {link.name}
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className='mt-5'>
            <h2>About us</h2>
            {quicklinks2?.map((link, linkid) => {
              return (
                <div key={linkid}>
                  <ul>
                    <li className="my-2">
                      <a href={link.link} className="text-[0.8rem]">
                        {link.name}
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
             <div className='md:hidden block'>
             <div className='flex space-x-5 mt-14'>
               {socialIcons.map((social, index) =>{
                return (
                     <a href={social.link} key={index}>
                    <img src={social.icon} alt={social.alt} />
                </a>
                )
               })}
             </div>
           <h4 className='mt-10'>&copy; {Year} Metabnb</h4>
          </div>
        </div>
    </div>
  )
}

export default Footer