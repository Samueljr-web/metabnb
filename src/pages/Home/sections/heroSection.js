import React from 'react'
import HeroImage from '../../../assets/hero-image.png'
import {NftPlatforms} from '../../../data/data'

function HeroSection() {
  return (
    <div>
      <div className="flex xl:px-20 md:px-12 px-4 py-20 items-center justify-between">
        <div className="md:w-[30rem] xl:w-[35rem] w-[18rem] textbox">
          <h2 className="xl:text-[3rem] lg:text-[2rem]  text-[1.5rem]">
            Rent a <span className="text-[#A02279]">Place</span> away from{" "}
            <span className="text-[#A02279]">Home</span> in the{" "}
            <span className="text-[#A02279]">Metaverse</span>
          </h2>
          <p className="xl:text-[1.5rem] lg:text-[1.2rem]  text-[1rem] mt-5">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="flex mt-5">
            <input
              type="text"
              placeholder="search for location"
              className="border-2 outline-none md:p-3 p-2 lg:w-[26rem] w-[14rem] lg:h-fit h-[2.5rem] rounded-tl-md rounded-bl-md"
            />
            <button className="bg-[#A02279] text-white lg:py-3 py-1 lg:px-10 px-2 rounded-tr-md rounded-br-md">
              Search
            </button>
          </div>
        </div>
        <div className="md:block hidden xl:w-fit w-[21rem] image-none">
          <img src={HeroImage} alt="hero-img" className="w-full" />
        </div>
      </div>
      <div className="bg-[#A02279] w-full md:h-16 h-10 flex space-x-2 justify-around items-center">
        {NftPlatforms.map((platforms, index) => {
          return (
            <div
              key={index}
              className="flex justify-center md:w-full w-[10rem]"
            >
              <img src={platforms.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSection