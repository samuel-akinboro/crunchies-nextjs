import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const HomeHeader = () => {
  return (
    <header className="bg-white dark:bg-black mb-4">
      <div className="flex justify-between items-center px-5 py-4 rounded-lg my-2.5">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium text-gray-800 dark:text-white">Hi Olumide Fala</h1>
          <p className="text-base text-gray-500 dark:text-gray-400 mt-1">It's lunch time!</p>
        </div>
        <button className="w-10 h-10 bg-red-100 dark:bg-red-200 rounded-full flex justify-center items-center">
          <IoSearchOutline className="text-2xl text-primary" />
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;