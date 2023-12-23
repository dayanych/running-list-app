import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/header';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
