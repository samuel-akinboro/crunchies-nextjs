import React from 'react';
import Image from 'next/image';
import { IoLocation, IoChevronForward } from 'react-icons/io5';

const CurrentLocation = ({ location }: any) => {
  return (
    <button className="relative rounded-2xl overflow-hidden border border-gray-200/30 w-full">
      <Image
        src="/images/location-bg.png" // Update this path to match your Next.js public folder structure
        layout="fill"
        objectFit="cover"
        alt="Location background"
      />
      <div className="relative flex items-center p-4 px-3 bg-white/90 dark:bg-black/90 gap-2">
        <div className="min-w-10 min-h-10 rounded-full bg-red-100 flex justify-center items-center">
          <IoLocation className="text-2xl text-red-500" />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">Current location</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{location}</p>
        </div>
        <IoChevronForward className="text-2xl text-gray-400" />
      </div>
    </button>
  );
};

export default CurrentLocation;