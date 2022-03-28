import React, { useReducer } from 'react';

const initCount = 0;

const DOWN_ACTION = 'down';
const UP_ACTION = 'up';

const countReducer = (state, action) => {
  switch (action) {
    case DOWN_ACTION:
      return state - 1;
    case UP_ACTION:
      return state + 1;
    default:
      throw new Error('Invalid action');
  }
};

const TestUseReducer = () => {
  const [count, dispatch] = useReducer(countReducer, initCount);
  return (
    <div>
      <strong>Use Reducer</strong>
      <div>
        Count: <strong>{count}</strong>
      </div>
      <div>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      </div>
    </div>
  );
};

export default TestUseReducer;
