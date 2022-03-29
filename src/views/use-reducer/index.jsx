import React, { useReducer, useRef } from 'react';
import { addJob, deleteJob, initState, reducer, setJob } from './reducer';

const TestUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const jobRef = useRef();
  const { job, jobs } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(job));
    dispatch(setJob(''));
    jobRef.current.focus();
  };

  return (
    <div>
      <strong>Use Reducer</strong>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            ref={jobRef}
            type="text"
            value={job}
            onChange={(e) => {
              dispatch(setJob(e.target.value));
            }}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {jobs.map((j, index) => {
          return (
            <div key={index}>
              {j} <button onClick={() => dispatch(deleteJob(index))}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestUseReducer;
