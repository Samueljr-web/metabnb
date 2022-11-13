import React,{useEffect} from 'react'
import AOS from "aos";
import Frame from '../../../assets/frames/Frame 59546.webp'

function Section2() {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="flex md:flex-row flex-col items-center justify-between md:h-[35rem] h-[45rem] py-10 pt-10 lg:px-20 px-10 mt-10 bg-[#A02279] text-white">
      <div data-aos='fade-right'>
        <h2 className="xl:text-[3.3rem] lg:text-[2.8rem] text-[2.5rem]">Metabnb NFTs</h2>
        <p className="mt-5 lg:text-lg text-sm">
          Discover our NFT gift cards collection. Loyal <br />
          customers gets amazing gift cards which are <br />
          traded as NFTs. These NFTs gives our cutomer <br />
          access to loads of our exclusive services.
        </p>
        <div className='mt-7'>
         <button className="bg-white p-3 px-6 rounded-md cursor-pointer text-[#A02279]">
            Learn more
         </button> 
        </div>
     
      </div>
      <div data-aos='flip-right' className="xl:w-[35rem] lg:w-[25rem] w-[17rem]">
        <img src={Frame} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Section2