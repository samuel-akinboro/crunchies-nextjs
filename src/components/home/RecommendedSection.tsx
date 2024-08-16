import React from 'react';
import Image from 'next/image';

const RecommendedSection = () => {

  const recommendations = [
    {
      image: '/images/chicken-wrap.png',
      title: 'Deccan Queen Ring',
      price: 5000,
      discount: '30% Off upto 60',
    },
    {
      image: '/images/chicken-wrap.png',
      title: "Mamoo's Tiffin",
      price: 23700,
      discount: '30% Off upto 60',
    },
  ];

  return (
    <div className="my-2.5 px-5 mb-0">
      <h2 className="text-xl font-medium mb-2.5">Recommended</h2>
      <div className="flex overflow-x-auto pb-5 -mx-5 px-5 hide-scrollbar">
        {recommendations.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center w-[230px] mr-3.5 rounded-2xl p-2.5 shadow-md`}
          >
            <div className='min-w-16 h-16 mr-2.5 relative rounded-2xl overflow-hidden'>
              <Image
                src={item.image}
                alt={item.title}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className="justify-center w-[65%]">
              <p className="text-sm font-light mb-1.25 truncate">{item.title}</p>
              <p className="text-xs font-normal mb-1.25">₦{item.price.toLocaleString()}</p>
              <p className="text-sm font-medium text-green">{item.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSection;