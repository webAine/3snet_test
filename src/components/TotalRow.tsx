import React from 'react';
import { type TotalEntry } from '../types/types';

interface TotalRowProps {
  data: TotalEntry[];
  visibleMonthIndexes: number[];
  visibleMonthsCount: number;
}

export const TotalRow: React.FC<TotalRowProps> = ({ data, visibleMonthIndexes, visibleMonthsCount }) => {
  return (
    <div
      className='grid font-semibold'
      style={{
        gridTemplateColumns: `200px repeat(${visibleMonthsCount * 2 + 1}, minmax(100px, 1fr))`,
        gridTemplateRows: 'repeat(2, 1fr)',
      }}
    >
      <div className='row-span-2 px-4 py-4 border-t border-gray-300 flex items-center font-bold text-blue-900'>Manager</div>

      <div className='px-4 py-2 borderTopLeft text-blue-900'>Total income:</div>
      {visibleMonthIndexes.map((i) => {
        const entry = data[i];
        return (
          <React.Fragment key={i}>
            <div className='text-center px-4 py-2 borderTopLeft'>${entry.plan.income.toLocaleString()}</div>
            <div className='text-center px-4 py-2 borderTopLeft'>${entry.fact.income.toLocaleString()}</div>
          </React.Fragment>
        );
      })}

      <div className='px-4 py-2 borderTopLeft text-blue-900'>Total active partners:</div>
      {visibleMonthIndexes.map((i) => {
        const entry = data[i];
        return (
          <React.Fragment key={i}>
            <div className='text-center px-4 py-2 borderTopLeft'>{entry.plan.activePartners}</div>
            <div className='text-center px-4 py-2 borderTopLeft'>{entry.fact.activePartners}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
