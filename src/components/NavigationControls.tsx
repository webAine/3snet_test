import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface NavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({ onPrev, onNext }) => {
  return (
    <div className='flex justify-end items-center mb-4'>
      <div className='flex gap-2'>
        <button onClick={onPrev} className='p-3 border rounded-md hover:bg-gray-100 cursor-pointer'>
          <IoIosArrowBack />
        </button>
        <button onClick={onNext} className='p-3 border rounded-md hover:bg-gray-100 cursor-pointer'>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
