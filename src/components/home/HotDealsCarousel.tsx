import React from 'react';
import Image from 'next/image';
import HotDealCard from './HotDealCard'; // adjust the path as necessary

const HotDealsCarousel = () => {
  const deals = [
    {
      image: '/images/honey-cake.png',
      title: 'Viral stacking cake with honey',
      price: 9670,
    },
    {
      image: '/images/honey-cake.png',
      title: 'Roast beef with black pepper',
      price: 8000,
    },
    {
      image: '/images/honey-cake.png',
      title: 'Viral stacking cake with honey',
      price: 9670,
    },
    {
      image: '/images/honey-cake.png',
      title: 'Roast beef with black pepper',
      price: 8000,
    },
  ];

  return (
    <div className="px-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Hot Deals 🔥</h2>
        <button 
          className="text-base text-primary"
          // onClick={() => console.log('See All pressed')}
        >
          See All
        </button>
      </div>
      <div className="flex gap-x-4 overflow-x-auto pb-4 hide-scrollbar">
        {deals.map((deal, index) => (
          <HotDealCard
            key={index}
            image={deal.image}
            title={deal.title}
            price={deal.price}
            onFavoritePress={() => console.log(`${deal.title} favorited`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotDealsCarousel;