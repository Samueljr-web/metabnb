import React,{useEffect} from 'react'
import Heart from '../../../assets/heart.png'
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Inspirations, Stars} from '../../../data/data'

function Section1() {
    useEffect(() => {
      AOS.init({
        duration: 1000
      });
    }, []);
  return (
    <div>
      <h2 className='md:text-[2.5rem] my-10 text-[2rem] text-center font-bold'>Inspiration for your next adventure</h2>
     <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>
         {Inspirations.map((Inspiration, index) =>{
            return index < 8 ? (
              <div
                className="relative border-2 w-60 h-[18rem] p-3 mt-4 mx-auto rounded-xl"
                key={index}
                data-aos='zoom-in-up'
              >
                <img src={Heart} alt='heart' className='absolute right-4 top-4 cursor-pointer' />
                <LazyLoadImage
                  src={Inspiration.image}
                  alt="alt"
                  className="w-full h-44 rounded-xl object-fill"
                />
                <div>
                    <div className='flex justify-between text-[.80rem] mt-5'>
                        <h4>{Inspiration.name}</h4>
                        <h4 className='font-bold'>{Inspiration.cost}</h4>
                    </div>
                    <div className='flex justify-between text-[.65rem] mt-1'>
                        <h4>{Inspiration.km}</h4>
                        <h4>{Inspiration.available}</h4>
                    </div>
                    <div className='flex space-x-1 mt-3'>
                        {Stars.map(star =>{
                          return  <img key={star.id} src={star.icon} alt='star-filled'/>
                        })}
                    </div>
                </div>
              </div>
            ): null;
         })}
     </div>
    </div>
  );
}

export default Section1