import React from 'react';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';

const HotDealCard = ({ image, title, price, onFavoritePress }: any) => {
  return (
    <div className="relative h-48 rounded-2xl overflow-hidden min-w-56">
      <Image 
        src={image} 
        alt={title}
        layout='fill'
        objectFit='cover'
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 min-h-[50%] p-2.5 justify-between rounded-3xl overflow-hidden">
        <div className="bg-black bg-opacity-50 backdrop-blur-md h-full p-2.5 flex justify-between gap-2.5 items-start rounded-xl">
          <div className="flex-1 justify-end">
            <h3 className="text-white text-sm font-normal line-clamp-2">{title}</h3>
            <div className="h-1.25" />
            <div className="flex flex-row gap-1.25">
              <span className="text-base text-red-500 font-light">₦</span>
              <span className="text-white text-xl">{price.toLocaleString()}</span>
            </div>
          </div>
          <button 
            // onClick={onFavoritePress} 
            className=""
          >
            <AiOutlineHeart size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotDealCard;