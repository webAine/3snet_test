import React from 'react';
import { type Data } from '../types/types';
import { TableHeader } from './TableHeader';
import { TotalRow } from './TotalRow';
import { ManagerRow } from './ManagerRowProps';
import { getMonthRange } from '../utils/monthUtils';

interface DataTableProps {
  data: Data;
  startMonthIndex: number;
  visibleMonthsCount: number;
}

export const DataTable: React.FC<DataTableProps> = ({ data, startMonthIndex, visibleMonthsCount }) => {
  const visibleMonthIndexes = getMonthRange(startMonthIndex, visibleMonthsCount);

  return (
    <div className='border border-gray-300'>
      <TableHeader visibleMonthIndexes={visibleMonthIndexes} visibleMonthsCount={visibleMonthsCount} />
      <TotalRow data={data.total} visibleMonthIndexes={visibleMonthIndexes} visibleMonthsCount={visibleMonthsCount} />

      {data.table.map((manager) => (
        <ManagerRow key={manager.id} manager={manager} visibleMonthIndexes={visibleMonthIndexes} visibleMonthsCount={visibleMonthsCount} />
      ))}
    </div>
  );
};
