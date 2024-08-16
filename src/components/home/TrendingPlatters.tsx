import React from 'react';
import Image from 'next/image';

const TrendingPlatters = () => {
  const platters = [
    {
      image: '/images/burger-food.png',
      title: 'Grilled fish with spicy onion sauce with black roasted beef',
      price: 12700,
    },
    {
      image: '/images/burger-food.png',
      title: 'Veggie Delight Cheesesteak Sliced tortillas with grilled meat',
      price: 32000,
    },
    {
      image: '/images/burger-food.png',
      title: 'Grilled fish with spicy onion sauce with black roasted beef',
      price: 42700,
    },
    {
      image: '/images/burger-food.png',
      title: 'Veggie Delight Cheesesteak Sliced tortillas with grilled meat',
      price: 12000,
    },
  ];

  return (
    <div className="my-5 px-5 mt-6">
      <h2 className="text-xl font-medium mb-3">Trending Platters</h2>
      {platters.map((platter, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className='w-20 h-20 mr-2.5 relative rounded-lg overflow-hidden'>
          <img 
            src={platter?.image} 
            alt={platter?.title}
            // layout='fill'
            // objectFit='cover'
            className="w-full h-full object-cover"
          />
          </div>
          <div className="flex-1">
            <p className="text-sm font-light mb-0.5 line-clamp-2 leading-[18px]">
              {platter.title}
            </p>
            <p className="text-base font-normal">
              <span className="text-primary">₦</span>
              {platter.price.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingPlatters;