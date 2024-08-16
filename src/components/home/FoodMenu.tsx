"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { motion } from 'framer-motion';

interface Props {
  name: string;
  price: number;
  image: string;
  inBag?: number;
}

const FoodItem = ({ name, price, image, inBag = 0 }: Props) => {
  const [quantity, setQuantity] = useState(inBag);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="w-[48%] sm:w-[31%] rounded-lg pb-2.5 mb-3.5 border border-gray-200 overflow-hidden">
      <div className="relative">
        <Image src={image} alt={name} width={200} height={120} className="w-full h-30 object-cover rounded-t-lg" />
        <motion.div 
          className="absolute top-2.5 right-2.5 bg-white h-8 w-8 rounded-full flex justify-center items-center"
          whileTap={{ scale: 1.2 }}
        >
          <button onClick={handleWishlist}>
            {isWishlisted ? (
              <AiFillHeart className="text-primary text-lg" />
            ) : (
              <AiOutlineHeart className="text-primary text-lg" />
            )}
          </button>
        </motion.div>
      </div>
      <div className="px-2.5">
        <div className="h-20">
          <h3 className="text-base mt-1.5 font-light line-clamp-2">{name}</h3>
          <p className="text-sm my-1.5 mt-0 font-normal">₦{price.toLocaleString()}</p>
        </div>
        {quantity === 0 ? (
          <button 
            className="w-full border border-primary text-primary py-1.5 rounded text-sm font-normal"
            onClick={() => setQuantity(1)}
          >
            Add to bag
          </button>
        ) : (
          <div className="flex justify-between items-center bg-primary rounded">
            <button 
              className="text-white text-lg font-normal px-2.5 py-1.5 border-r border-white"
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
            >
              -
            </button>
            <span className="text-white font-normal text-sm">{quantity} in bag</span>
            <button 
              className="text-white text-lg font-normal px-2.5 py-1.5 border-l border-white"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const FoodMenu = () => {
  const foodItems = [
    { name: 'Fried Brown Rice', price: 5000, image: '/images/rice.png' },
    { name: 'Veggie Delight Cheesesteak', price: 3200, image: '/images/cheesesteak.png', inBag: 2 },
    { name: 'Chicken burger first delivery', price: 5000, image: '/images/burger-food.png' },
    { name: "Crunchies's Chicken wrap", price: 5000, image: '/images/chicken-wrap.png' },
    { name: 'Fried Brown Rice', price: 5000, image: '/images/rice.png' },
    { name: 'Veggie Delight Cheesesteak', price: 3200, image: '/images/cheesesteak.png', inBag: 2 },
  ];

  return (
    <div className="flex flex-wrap justify-between p-2.5 px-5">
      {foodItems.map((item, index) => (
        <FoodItem key={index} {...item} />
      ))}
    </div>
  );
};

export default FoodMenu;