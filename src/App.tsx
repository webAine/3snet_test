import { useEffect, useState } from 'react';
import { fetchData } from './api/api';
import { type Data } from './types/types';
import { NavigationControls } from './components/NavigationControls';
import { DataTable } from './components/DataTable';
import { Loading } from './components/Loading';
import { ErrorMessage } from './components/ErrorMessage';

const App = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startMonthIndex, setStartMonthIndex] = useState(0);

  const visibleMonthsCount = 6;

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (err) {
        console.error('Ошибка при загрузке данных:', err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Произошла неизвестная ошибка при загрузке.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handlePrev = () => {
    setStartMonthIndex((prev) => (prev - 1 + 12) % 12);
  };

  const handleNext = () => {
    setStartMonthIndex((prev) => (prev + 1) % 12);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return <ErrorMessage message='Данные отсутствуют.' />;

  return (
    <div className='p-4 w-full max-h-[1080px] h-[100vh] overflow-auto text-sm'>
      <NavigationControls onPrev={handlePrev} onNext={handleNext} />
      <DataTable data={data} startMonthIndex={startMonthIndex} visibleMonthsCount={visibleMonthsCount} />
    </div>
  );
};

export default App;
