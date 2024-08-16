import React from 'react';
import Image from 'next/image';
import { IoHeartOutline } from 'react-icons/io5';
import { FiTruck } from 'react-icons/fi';

const foodItems = [
  {
    id: '1',
    name: "The Heaven's Food",
    price: '32,000',
    image: '/images/chicken-wrap.png',
    freeDelivery: true,
    hotDeal: true,
  },
  {
    id: '2',
    name: 'Veggie Delight Cheesesteak',
    price: '8,000',
    image: '/images/chicken-wrap.png',
    freeDelivery: true,
    hotDeal: false,
  },
];

const FoodItem = ({ item }: any) => (
  <div className="mb-5 rounded-2xl overflow-hidden shadow-md">
    <div className="relative">
      <Image 
        src={item.image} 
        alt={item.name}
        width={400}
        height={200}
        className="w-full h-50 object-cover"
      />
      <button className="absolute top-2.5 right-2.5 bg-white rounded-full p-1.5">
        <IoHeartOutline size={20} className="text-primary" />
      </button>
      {item.hotDeal && (
        <div className="absolute top-2.5 left-2.5 bg-red-500 rounded-md px-2.5 py-1.5">
          <span className="text-white font-bold text-sm">Hot Deal</span>
        </div>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-sm font-light mb-1.5">{item.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-sm font-normal">₦{item.price}</span>
        {item.freeDelivery && (
          <div className="flex items-center">
            <FiTruck size={16} className="text-green" />
            <span className="ml-1.5 text-xs">Free delivery</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const AllInCrunchies = () => {
  return (
    <div className="my-5 px-4">
      <h2 className="text-xl font-medium mb-4">All in Crunchies</h2>
      <div>
        {foodItems?.map((item, index) => (
          <FoodItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllInCrunchies;