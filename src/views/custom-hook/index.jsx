import React from 'react';
import Father from './Father';
import Mother from './Mother';

const CustomHook = () => {
  return (
    <div>
      <strong>CustomHook:</strong>
      <Father />
      <Mother />
    </div>
  );
};

export default CustomHook;
