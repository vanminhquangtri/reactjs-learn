import React from 'react';

const Child = ({ onChangeCount }) => {
  const a = onChangeCount;
  console.log('a :>> ', a);

  return (
    <div>
      <button onClick={onChangeCount}>Increase Count</button>
    </div>
  );
};

export default React.memo(Child);
