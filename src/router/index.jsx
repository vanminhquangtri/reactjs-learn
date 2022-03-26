import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomHook from 'views/custom-hook';

export const routes = [
  {
    path: '/custom-hook',
    title: 'CustomHook',
    element: <CustomHook />,
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
