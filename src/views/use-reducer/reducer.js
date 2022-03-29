export const initState = {
  job: '',
  jobs: [],
};

export const SET_JOB = 'SET_JOB';
export const ADD_JOB = 'ADD_JOB';
export const DELETE_JOB = 'DELETE_JOB';

export const setJob = (job) => {
  return {
    type: SET_JOB,
    payload: job,
  };
};

export const addJob = (job) => {
  return {
    type: ADD_JOB,
    payload: job,
  };
};

export const deleteJob = (jobIndex) => {
  return {
    type: DELETE_JOB,
    payload: jobIndex,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((_, index) => {
          return index !== action.payload;
        }),
      };
    default:
      return state;
  }
};
