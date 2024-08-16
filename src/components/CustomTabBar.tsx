"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoHomeOutline, IoHome, IoHeartOutline, IoHeart, IoBagOutline, IoListOutline, IoList, IoPersonOutline, IoPerson } from 'react-icons/io5';

const INDICATOR_WIDTH = 60; // pixels

const CustomTabBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);

  useEffect(() => {
    const updateTabWidth = () => {
      const tabBar:any = document.querySelector('.tab-bar');
      if (tabBar) {
        setTabWidth(tabBar?.offsetWidth / 5);
      }
    };

    updateTabWidth();
    window.addEventListener('resize', updateTabWidth);
    return () => window.removeEventListener('resize', updateTabWidth);
  }, []);

  const indicatorPosition = () => {
    return `${activeTab * tabWidth + (tabWidth - INDICATOR_WIDTH) / 2}px`;
  };

  const renderIcon = (ActiveIcon:any, InactiveIcon:any, index:any, href = '') => (
    <div className="flex-1 flex justify-center items-center">
      <button onClick={() => setActiveTab(index)} className="focus:outline-none">
        {activeTab === index ? <ActiveIcon size={24} className="text-black" /> : <InactiveIcon size={24} className="text-gray-500" />}
      </button>
    </div>
  );

  return (
    <div className="fixed bottom-0 w-full z-50">
      <div className="tab-bar bg-white h-16 rounded-t-3xl shadow-lg flex items-center relative max-w-[768px] mx-auto">
        {renderIcon(IoHome, IoHomeOutline, 0, '/')}
        {renderIcon(IoHeart, IoHeartOutline, 1, '/')}
        <div className="flex-1 flex justify-center items-center">
          <button 
            onClick={() => setActiveTab(2)} 
            className="w-16 h-16 rounded-full bg-white flex justify-center items-center -mt-8 focus:outline-none"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center shadow-lg shadow-red-500 dark:shadow-md">
              <IoBagOutline size={20} className="text-white" />
            </div>
          </button>
        </div>
        {renderIcon(IoList, IoListOutline, 3)}
        {renderIcon(IoPerson, IoPersonOutline, 4)}
        <motion.div 
          className="absolute bottom-0 w-[60px] h-[10px]"
          animate={{ left: indicatorPosition() }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Image
            src="/images/tab-indicator.png"
            alt="Tab Indicator"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CustomTabBar;