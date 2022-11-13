import React from 'react'
import Heart from "../assets/heart.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Inspirations, Stars, subNav } from "../data/data";
import{Modal} from '../components/'

function PlaceToStay() {
  return (
    <div className="">
      <Modal />
      <div className="flex xl:px-20 md:px-9 px-6 my-10 items-center space-x-5">
        {subNav.map((items) => {
          return (
            <div key={items.id} className="text-[#434343]">
              <a href={items.href}>{items.name}</a>
            </div>
          );
        })}
        <input type="select" className="border-2" />
      </div>
      <div className="grid grid-cols-4">
        {Inspirations.map((Inspiration, index) => {
          return (
            <div
              className="relative border-2 w-60 h-[18rem] p-3 mt-4 mx-auto rounded-xl"
              key={index}
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
                  <h4 className="font-medium">{Inspiration.cost}</h4>
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