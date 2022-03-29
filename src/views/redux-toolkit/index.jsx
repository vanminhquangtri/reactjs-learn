import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from 'store/features/counter';
import { addPosts, getActivePost } from 'store/features/posts/middleware';

export function TestReduxToolkit() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const listPosts = useSelector((state) => state.posts.list);

  return (
    <div>
      <strong>Redux Toolkit</strong>
      <div>
        <strong>Count: {count}</strong>
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(-count))}
        >
          Reset
        </button>
      </div>
      <br />
      <div>
        <div>
          <strong>Middleware</strong>
        </div>
        <div>
          <button onClick={() => dispatch(addPosts())}>Fetch posts</button>
          <div>
            {listPosts.map((p) => {
              return (
                <button
                  key={p.id}
                  onClick={() => dispatch(getActivePost(p.id))}
                >
                  {p.id}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
