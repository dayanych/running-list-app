import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getCurrentYear } from 'src/common/helpers/get-current-year';
import { getWeekNumber } from 'src/common/helpers/get-week-number';
import { useUser } from 'src/common/hooks/use-auth';

function Home() {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const currentYear = getCurrentYear();
      const currentWeek = getWeekNumber(new Date());
      navigate(`/${currentYear}/${currentWeek}`, { replace: true });
    }
  }, []);

  return <Outlet />;
}

export default Home;
