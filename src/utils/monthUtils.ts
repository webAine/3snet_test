export const getMonthRange = (start: number, count: number): number[] => Array.from({ length: count }, (_, i) => (start + i) % 12);

export const getMonthName = (index: number): string => new Date(2025, index).toLocaleString('en-US', { month: 'long' });
