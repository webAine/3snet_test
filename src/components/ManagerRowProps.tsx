import React from 'react';
import { type TableEntry } from '../types/types';

interface ManagerRowProps {
  manager: TableEntry;
  visibleMonthIndexes: number[];
  visibleMonthsCount: number;
}

export const ManagerRow: React.FC<ManagerRowProps> = ({ manager, visibleMonthIndexes, visibleMonthsCount }) => {
  return (
    <div
      className='grid bg-white'
      style={{
        gridTemplateColumns: `200px repeat(${visibleMonthsCount * 2 + 1}, minmax(100px, 1fr))`,
        gridTemplateRows: 'repeat(2, 1fr)',
      }}
    >
      <div className='row-span-2 px-4 py-4 border-t border-gray-300 flex items-center text-blue-950 font-bold'>{manager.adminName}</div>

      <div className='px-4 py-2 borderTopLeft text-xs text-gray-500'>Income:</div>
      {visibleMonthIndexes.map((i) => {
        const month = manager.months[i];
        return month ? (
          <React.Fragment key={i}>
            <div className='text-center px-4 py-2 borderTopLeft'>${month.plan.income.toLocaleString()}</div>
            <div className='text-center px-4 py-2 borderTopLeft'>${month.fact.income.toLocaleString()}</div>
          </React.Fragment>
        ) : (
          <React.Fragment key={i}>
            <div className='text-center text-gray-400 py-2 borderTopLeft'>No data</div>
            <div className='text-center text-gray-400 py-2 borderTopLeft'>No data</div>
          </React.Fragment>
        );
      })}

      <div className='px-4 py-2 borderTopLeft text-sm text-gray-500'>Active partners:</div>
      {visibleMonthIndexes.map((i) => {
        const month = manager.months[i];
        return month ? (
          <React.Fragment key={i}>
            <div className='text-center px-4 py-2 borderTopLeft'>{month.plan.activePartners}</div>
            <div className='text-center px-4 py-2 borderTopLeft'>{month.fact.activePartners}</div>
          </React.Fragment>
        ) : (
          <React.Fragment key={i}>
            <div className='text-center text-gray-400 py-2 borderTopLeft'>No data</div>
            <div className='text-center text-gray-400 py-2 borderTopLeft'>No data</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
