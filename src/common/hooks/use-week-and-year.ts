import { useParams } from 'react-router-dom';

export const useWeekParam = () => {
  const { weekNumber, year } = useParams();
  if (!weekNumber || !year) {
    throw new Error('week and year params are not provided');
  }

  return { weekNumber: +weekNumber, year: +year };
};
