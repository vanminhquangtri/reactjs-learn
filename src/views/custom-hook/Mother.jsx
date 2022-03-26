import React from 'react';
import useCount from './Count';

const Mother = () => {
  const count = useCount();
  return (
    <div>
      Mother component. useCount: <strong>{count}</strong>
    </div>
  );
};

export default Mother;
