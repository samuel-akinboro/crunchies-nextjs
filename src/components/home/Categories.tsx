import React from 'react';
import Image from 'next/image';

const categories = [
  { id: '1', name: 'Pizza', places: 75, image: '/images/pizza.png', color: '#FFF3E0' },
  { id: '2', name: 'Biryani', places: 80, image: '/images/biryani.png', color: '#FFEBEE' },
  { id: '3', name: 'Burger', places: 35, image: '/images/burger.png', color: '#E8F5E9' },
  { id: '4', name: 'Pizza', places: 75, image: '/images/pizza.png', color: '#FFF3E0' },
  { id: '5', name: 'Biryani', places: 80, image: '/images/biryani.png', color: '#FFEBEE' },
  { id: '6', name: 'Burger', places: 35, image: '/images/burger.png', color: '#E8F5E9' },
  // Add more categories as needed
];

const CategoryItem = ({ item }: any) => (
  <div className="mr-5">
    <div className="w-30 h-30 rounded-full bg-white flex flex-col justify-center items-center border-[1.5px] border-[#F5F6F6] overflow-hidden relative">
      <div className="absolute w-30 h-30 rounded-full bottom-[-55%]" style={{ backgroundColor: item.color }} />
      <div className='relative h-[3.3rem] w-[3.3rem] mb-1.5'>
        <Image src={item.image} layout='fill' objectFit='contain' alt={item.name} className="z-10" />
      </div>
      <h3 className="text-base font-medium text-center z-10 text-black">{item.name}</h3>
      <p className="text-xs text-gray-500 text-center z-10">{item.places} Places</p>
    </div>
  </div>
);

const Categories = () => {
  return (
    <div className="my-5">
      <h2 className="text-2xl font-medium mb-4 ml-5">Categories</h2>
      <div className="flex overflow-x-auto pl-5 hide-scrollbar">
        {categories.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;