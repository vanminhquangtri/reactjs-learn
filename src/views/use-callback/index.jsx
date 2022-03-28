import React, { useCallback, useState } from 'react';
import Child from './Child';

const TestUseCallback = () => {
  const [count, setCount] = useState(0);

  const handleChangeCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <div>
        <strong>Use Callback</strong>
      </div>
      <div>Count: {count}</div>
      <Child onChangeCount={handleChangeCount} />
    </div>
  );
};

export default TestUseCallback;
