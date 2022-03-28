import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomHook from 'views/custom-hook';
import TestUseCallback from 'views/use-callback';
import TestUseMemo from 'views/use-memo';
import TestUseReducer from 'views/use-reducer';

export const routes = [
  {
    path: '/custom-hook',
    title: 'CustomHook',
    element: <CustomHook />,
  },
  {
    path: '/use-memo',
    title: 'UseMemo',
    element: <TestUseMemo />,
  },
  {
    path: '/use-callback',
    title: 'UseCallback',
    element: <TestUseCallback />,
  },
  {
    path: '/use-reducer',
    title: 'UseReducer',
    element: <TestUseReducer />,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route path={route.path} element={route.element} key={index} />;
      })}
    </Routes>
  );
};

export default AppRouter;
