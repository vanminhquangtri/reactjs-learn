import React from 'react';
import useCount from './Count';

const Father = () => {
  const count = useCount();
  return (
    <div>
      Father component. useCount: <strong>{count}</strong>
    </div>
  );
};

export default Father;
