import React, {useEffect} from 'react'
import Heart from "../assets/heart.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AOS from "aos";
import { Inspirations, Stars, subNav } from "../data/data";
import{Modal} from '../components/'
import Settings from '../assets/setting-5.svg'

function PlaceToStay() {
  useEffect(() => {
       AOS.init();
  }, [])
  
  return (
    <div className="">
      <Modal />
      <div className="flex md:px-9 px-6 my-10 items-center space-x-16 md:overflow-x-scroll scroll-m-5">
        {subNav.map((items) => {
          return (
            <div key={items.id} className="text-[#434343]">
              <a href={items.href}>{items.name}</a>
            </div>
          );
        })}

        <button className='flex border-2 bg-transparent rounded-lg p-2'>
          Location
          <img src={Settings} alt='' className='ml-3'/>
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {Inspirations.map((Inspiration, index) => {
          return (
            <div
              className="relative border-2 w-60 h-[18rem] p-3 mt-4 mx-auto rounded-xl"
              key={index}
              data-aos='zoom-in-up'
            >
              <img
                src={Heart}
                alt="heart"
                className="absolute right-4 top-4 cursor-pointer"
              />
              <LazyLoadImage
                src={Inspiration.image}
                alt="alt"
                className="w-full h-44 rounded-xl object-fill"
              />
              <div>
                <div className="flex justify-between text-[.80rem] mt-5">
                  <h4>{Inspiration.name}</h4>
                  <h4 className="font-bold">{Inspiration.cost}</h4>
                </div>
                <div className="flex justify-between text-[.65rem] mt-1">
                  <h4>{Inspiration.km}</h4>
                  <h4>{Inspiration.available}</h4>
                </div>
                <div className="flex space-x-1 mt-3">
                  {Stars.map((star) => {
                    return (
                      <img key={star.id} src={star.icon} alt="star-filled" />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlaceToStay