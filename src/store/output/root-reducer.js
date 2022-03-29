import { combineReducers } from 'redux';
import counterReducer from 'store/features/counter';
import postsReducers from 'store/features/posts';

const rootReducers = combineReducers({
  counter: counterReducer,
  posts: postsReducers,
});

export default rootReducers;
