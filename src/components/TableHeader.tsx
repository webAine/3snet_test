import React from 'react';
import { getMonthName } from '../utils/monthUtils';

interface TableHeaderProps {
  visibleMonthIndexes: number[];
  visibleMonthsCount: number;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ visibleMonthIndexes, visibleMonthsCount }) => {
  return (
    <div
      className='grid bg-blue-50'
      style={{
        gridTemplateColumns: `200px repeat(${visibleMonthsCount * 2 + 1}, minmax(100px, 1fr))`,
      }}
    >
      <div className='l border-gray-300'></div>
      <div className='border-l border-gray-300'></div>
      {visibleMonthIndexes.map((i) => (
        <div key={i} className='col-span-2 px-4 py-2 border-l border-gray-300 font-semibold text-gray-500'>
          {getMonthName(i)}
        </div>
      ))}

      <div className=' border-gray-300'></div>
      <div className='border-l border-gray-300'></div>
      {visibleMonthIndexes.map((i) => (
        <React.Fragment key={i}>
          <div className=' px-4 py-1 border-l border-gray-300 text-gray-500'>Plan</div>
          <div className=' px-4 py-1 text-gray-500'>Fact</div>
        </React.Fragment>
      ))}
    </div>
  );
};
